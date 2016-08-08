var React = require('react');
// companion to provider component, which provides access to store to children, but children need to specify which data they need
var {connect} = require('react-redux');
import Todo from 'Todo';

export var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        )
      }
      // 1. {...todo} spread operator lets us spread out all our properties
      // as individual props to our component w/o defining everything
      // 2. Unique key property required for React to keep track of list items
      return todos.map((todo) => {
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
export default connect(
  (state) => {
    return {
      todos: state.todos
    }
  }
)(TodoList);
