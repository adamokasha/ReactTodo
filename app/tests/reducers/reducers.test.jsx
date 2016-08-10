var expect = require('expect');
// check if function remains pure funtion
// if not pure, tests will fail
var df = require('deep-freeze-strict'); 

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'cat'
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should flip showCompleted status', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));
      
      expect(res).toEqual(true)
    });
  });
  
  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'a123b',
          text: 'Something to do',
          completed: false,
          createdAt: 123456
        }
      };
      var res = reducers.todosReducer(df([]), df(action));
      
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });
    
    
    it('should update todo', () => {
      // define todos array with realistic todo item
      var todos = [
        {
          id: '123',
          text: 'Eat',
          completed: true,
          createdAt: 123,
          completedAt: 125
        },
      ];
      var updates = {
        completed: false,
        completedAt: null
      }
      // generate action
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      }
      // call reducer and assert completed flipped
      var res = reducers.todosReducer(df(todos), df(action));
      
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });
    
    it('should add existing todos', () => {
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));
      
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
