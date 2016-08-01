var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  // mocha method called before every test
  beforeEach(() => {
    // Clean out localstorage value
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
          id: 23,
          test: 'test all files',
          completed: false
        }];
        TodoAPI.setTodos(todos);

        var actualTodos = JSON.parse(localStorage.getItem('todos'));

        // with object and arrays use toEqual (compares values inside arrs and objs)
        expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      // if item doesnt exist getItem will return null
      expect(localStorage.getItem('todos')).toBe(null)
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localStorage', () => {
      var todos = [{
          id: 23,
          test: 'test all files',
          completed: false
        }];
        localStorage.setItem('todos', JSON.stringify(todos));

        var actualTodos = TodoAPI.getTodos();

        expect(actualTodos).toEqual(todos);
    });
  });
});
