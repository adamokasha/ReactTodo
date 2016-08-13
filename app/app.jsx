var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/';

// if user arg present someone logged in, if not someone logged out
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // login then grabs todos (unique user todos)
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    // when user logs in push them to todos url
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
