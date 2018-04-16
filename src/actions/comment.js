import config from "../config.json";
const f2e = config.f2e;
const firebase = require("../firebase/firebase").firebase;
const database = require("../firebase/firebase").database;

export const getComment = comment => ({
  type: "GET_COMMENT",
  comment
});

export const addComment = comment => ({
  type: "ADD_COMMENT",
  comment
});

export const deleteComment = id => ({
  type: "DELETE_COMMENT",
  id
});

const deleteData = (uid, lectureId, id) => {
  fetch(`${f2e}/${uid}/${lectureId}/${id}/deleteComment`, {
    method: "DELETE"
  })
    .then(res => (res.ok ? res.json() : Promise.reject(res.text())))
    .catch(() => Promise.reject("create-fail"));
};

export const startDeleteComment = (uid, lectureId, id) => {
  return async (dispatch, getState) => {
    await deleteData(uid, lectureId, id);
    dispatch(deleteComment(id));
  };
};

const postData = (uid, lectureId, comment) => {
  return fetch(`${f2e}/${uid}/${lectureId}/addComment`, {
    method: "POST",
    body: JSON.stringify({
      comment
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => (res.ok ? res.json() : Promise.reject(res.text())))
    .then(data => data)
    .catch(() => Promise.reject("create-fail"));
};

export const startAddComment = (uid, lectureId, comment) => {
  return async (dispatch, getState) => {
    const id = await postData(uid, lectureId, comment);
    dispatch(addComment({ id, comment }));
  };
};

const getData = (uid, lectureId) => {
  return fetch(`${f2e}/${uid}/${lectureId}/getAllComment`)
    .then(res => (res.ok ? res.json() : Promise.reject(res.text())))
    .then(data => data)
    .catch(() => Promise.reject("create-fail"));
};

export const startGetComment = (uid, lectureId) => {
  return async (dispatch, getState) => {
    const data = await getData(uid, lectureId);
    dispatch(getComment(data));
  };
};
