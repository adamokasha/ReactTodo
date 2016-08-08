var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

import {configure} from 'configureStore';
// To require a export default use import.
// ConnectedTodoList = var
// but here we're also pulling off the non-connected component {TodoList} with es6 destructuring
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [{
      id:1,
      text: 'Do something',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }, {
      id: 2,
      text: 'Check mail',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }];

  var store = configure({
    todos
  });
  var provider = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <ConnectedTodoList/>
    </Provider>
  );
  // Will check how many of a given component are rendered under a seperate component (returns array of components)
  // First arg item to check, second is class of the item we are looking for
  // access first element from the array since we know there's only one instance
  var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
  var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

  expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    var todos = [];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1)
  });
});
