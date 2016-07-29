var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      // 1. {...todo} spread operator lets us spread out all our properties
      // as individual props to our component w/ defining everything
      // 3. Unique key property required for React to keep track of list items
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

module.exports = TodoList;
