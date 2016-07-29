var React = require('react');
var ReactDOM = require('react-dom');
// Destructuring syntax
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var TodoApp = require('TodoApp');

// Load foundation-sites
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

// Renders to screen
ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
