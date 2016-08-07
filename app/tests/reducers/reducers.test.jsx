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

  describe('showCompleteReducer', () => {
    it('should flip showCompleted status', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompleteReducer(df(false), df(action));
      
      expect(res).toEqual(true)
    });
  });
});
