var React = require('react');
var ReactDOM = require('react-dom');
// Lets you provide store to children
var {Provider} = require('react-redux');
// Destructuring syntax
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState())
});


// Load foundation-sites
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

// Renders to screen
ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
