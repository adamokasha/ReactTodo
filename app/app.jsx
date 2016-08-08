var React = require('react');
var ReactDOM = require('react-dom');
// Destructuring syntax
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState())
});

// dispatch action created through action generator
store.dispatch(actions.addTodo('Clean the apartment'));
store.dispatch(actions.setSearchText('apartment'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation-sites
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

// Renders to screen
ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
