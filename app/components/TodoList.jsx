var React = require('react');
// companion to provider component, which provides access to store to children, but children need to specify which data they need
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render: function () {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        )
      }
      // 1. {...todo} spread operator lets us spread out all our properties
      // as individual props to our component w/o defining everything
      // 2. Unique key property required for React to keep track of list items
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        )
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});


// connects redux store to an individual component
// below, todos will be set on the props of the TodoList component
// we can return only the state items we care about (here state.todos)
// or return all state by using return state as below
export default connect(
  (state) => {
    return state;
  }
)(TodoList);
