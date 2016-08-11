var $ = require('jquery');

module.exports = {
  
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      // Filter must return true for each array item for that item to remain in array
      // so we have to negate using !todo.complete (which would be false if not completed by default)
      // ...or if showCompleted checked (true) return all todos
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      // check actually have search text
      // or check if searchText inside todo's text
      // Note: must return true to keep item in filteredTodos array
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    // Filter by searchText (my solution)
    // filteredTodos = filteredTodos.filter((todo) => {
    //     var text = todo.text.toLowerCase();
    //     if(searchText.length === 0) {
    //       return true;
    //     } else if(text.indexOf(searchText) > -1) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    // });

    // Sort todos with non-completed first
    // -1 = a first, 1 = b first, 0 = no sort
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
