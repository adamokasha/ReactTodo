import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'app/firebase/';

// react-router mw args
// onEnter property on any route will let route use this mw function
var requireLogin = (nextState, replace, next) => {
  // if someone not logged in
  if (!firebase.auth().currentUser) {
    // similar to hashHistory push
    replace('/');
  }
  next();
}

var redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos')
  }
  next();
}

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
    </Route>
  </Router>
);
