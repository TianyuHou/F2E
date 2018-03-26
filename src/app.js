import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    console.log(store.getState().auth.uid);
    history.push('/profile');
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
