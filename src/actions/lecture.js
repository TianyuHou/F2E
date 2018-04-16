import config from "../config.json";
// const f2e = config.f2e;
const firebase = require("../firebase/firebase").firebase;
const database = require("../firebase/firebase").database;

export const getLecture = lecture => ({
  type: "GET_LECTURE",
  lecture
});

export const addLecture = lecture => ({
  type: "ADD_LECTURE",
  lecture
});

export const editLecture = (id, lecture) => ({
  type: "EDIT_LECTURE",
  id,
  lecture
});

export const deleteLecture = id => ({
  type: "DELETE_LECTURE",
  id
});

const deleteData = (uid, id) => {
  fetch(`/${uid}/${id}/deleteLecture`, {
    method: "DELETE"
  })
    .then(res => (res.ok ? res.json() : Promise.reject(res.text())))
    .catch(() => Promise.reject("create-fail"));
};

export const startDeleteLecture = id => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    await deleteData(uid, id);
    dispatch(deleteLecture(id));
  };
};

const postData = (uid, lecture) => {
  return fetch(`/${uid}/addLecture`, {
    method: "POST",
    body: JSON.stringify({
      lecture
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => (res.ok ? res.json() : Promise.reject(res.text())))
    .then(data => data)
    .catch(() => Promise.reject("create-fail"));
};

export const startAddLecture = lecture => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const id = await postData(uid, lecture);
    dispatch(addLecture({ id, lecture }));
  };
};

const getMyData = uid => {
  return fetch(`/${uid}/getMyLecture`)
    .then(res => (res.ok ? res.json() : Promise.reject(res.text())))
    .then(data => data)
    .catch(() => Promise.reject("create-fail"));
};

const getData = () => {
  return fetch(`/getAllLecture`)
    .then(res => (res.ok ? res.json() : Promise.reject(res.text())))
    .then(data => data)
    .catch(() => Promise.reject("create-fail"));
};

export const startGetLecture = () => {
  return async (dispatch, getState) => {
    const data = await getData();
    dispatch(getLecture(data));
  };
};

const updateData = (uid, lecture, id) => {
  fetch(`/${uid}/${id}/EditLecture`, {
    method: "PUT",
    body: JSON.stringify({
      lecture
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => (res.ok ? res.json() : Promise.reject(res.text())))
    .catch(() => Promise.reject("create-fail"));
};

export const startEditLecture = (id, lecture) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    await updateData(uid, lecture, id);
    dispatch(editLecture(id, lecture));
  };
};
