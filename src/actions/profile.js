import config from "../config.json";
const f2e = config.f2e;
const firebase = require("../firebase/firebase").firebase;
const database = require("../firebase/firebase").database;

export const getProfile = info => ({
  type: "GET_PROFILE",
  info
});

export const editProfile = info => ({
  type: "EDIT_PROFILE",
  info
});

const putData = (info, uid) => {
  fetch(`${f2e}/${uid}/updateProfile`, {
    method: "PUT",
    body: JSON.stringify({
      info
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => (res.ok ? res.json() : Promise.reject(res.text())))
    .catch(() => Promise.reject("create-fail"));
};

export const startEditProfile = (info, uid) => {
  return async dispatch => {
    await putData(info, uid);
    dispatch(editProfile({ info }));
  };
};

export const getData = uid => {
  return fetch(`${f2e}/${uid}/getProfile`)
    .then(res => (res.ok ? res.json() : Promise.reject(res.text())))
    .then(data => data)
    .catch(() => Promise.reject("create-fail"));
};

export const startGetProfile = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const data = await getData(uid);
    dispatch(getProfile(data));
  };
};
