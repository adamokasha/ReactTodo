var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [{
      id:1,
      text: 'Do something'
    }, {
      id: 2,
      text: 'Check mail'
    }];

  var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
  // Will check how many of a given component are rendered under a seperate component (returns array of components)
  // First arg item to check, second is class of the item we are looking for
  var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

  expect(todosComponents.length).toBe(todos.length);
  });
});
