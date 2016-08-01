var $ = require('jQuery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)){
      // first argument is key (string, name for variable), second must also be a string
      // localStorage can only store strings
      localStorage.setItem('todos', JSON.stringify(todos));
      // to differentiate between failed and valid calls to setTodos
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      // converts string back to original object or array
      todos = JSON.parse(stringTodos);
    } catch (e) {
      // do nothing
    }

    return $.isArray(todos) ? todos : [];
  }
};
