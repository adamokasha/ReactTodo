import firebase, {firebaseRef} from 'app/firebase/';
import moment from 'moment';
// redux thunk lets action generators return functions so we can use some asynchronous code

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

// toggleShowCompleted TOGGLE_SHOW_COMPLETED
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

// redux thunk mw lets us return a function
// The inner function receives the store methods dispatch and getState as parameters
// so... we can perform asynchronous dispatch
export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var todoRef = firebaseRef.child('todos').push(todo);
    
    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
}

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null 
    };
    
    // return this so we can chain it in our test
    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    })
  };
};
