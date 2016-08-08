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
        text: 'Feed the cat'
      };
      var res = reducers.todosReducer(df([]), df(action));
      
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });
    
    
    it('should toggle todo', () => {
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
      // generate action
      var action = {
        type: 'TOGGLE_TODO',
        id: '123'
      }
      // call reducer and assert completed flipped
      var res = reducers.todosReducer(df(todos), df(action));
      
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });
});
