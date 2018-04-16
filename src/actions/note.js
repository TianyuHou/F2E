import config from "../config.json";
const f2e = config.f2e;
const firebase = require("../firebase/firebase").firebase;
const database = require("../firebase/firebase").database;

export const getNote = note => ({
  type: "GET_NOTE",
  note
});

export const addNote = note => ({
  type: "ADD_NOTE",
  note
});

export const editNote = (id, note) => ({
  type: "EDIT_NOTE",
  id,
  note
});

export const deleteNote = id => ({
  type: "DELETE_NOTE",
  id
});

const deleteData = (uid, id) => {
  fetch(`${f2e}/${uid}/${id}/deleteNote`, {
    method: "DELETE"
  })
    .then(res => (res.ok ? res.json() : Promise.reject(res.text())))
    .catch(() => Promise.reject("create-fail"));
};

export const startDeleteNote = id => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    await deleteData(uid, id);
    dispatch(deleteNote(id));
  };
};

const postData = (uid, note) => {
  return fetch(`${f2e}/${uid}/addNote`, {
    method: "POST",
    body: JSON.stringify({
      note
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => (res.ok ? res.json() : Promise.reject(res.text())))
    .then(data => data)
    .catch(() => Promise.reject("create-fail"));
};

export const startAddNote = note => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const id = await postData(uid, note);
    dispatch(addNote({ id, note }));
  };
};

const getData = uid => {
  return fetch(`${f2e}/${uid}/getNote`)
    .then(res => (res.ok ? res.json() : Promise.reject(res.text())))
    .then(data => data)
    .catch(() => Promise.reject("create-fail"));
};

export const startGetNote = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const data = await getData(uid);
    dispatch(getNote(data));
  };
};

const updateData = (uid, note, id) => {
  fetch(`${f2e}/${uid}/${id}/EditNote`, {
    method: "PUT",
    body: JSON.stringify({
      note
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => (res.ok ? res.json() : Promise.reject(res.text())))
    .catch(() => Promise.reject("create-fail"));
};

export const startEditNote = (id, note) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    await updateData(uid, note, id);
    dispatch(editNote(id, note));
  };
};
