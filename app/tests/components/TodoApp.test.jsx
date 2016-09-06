
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp',()=>{
  it('should exist',()=>{
    expect(TodoApp).toExist();
  })

  it('should add todo to the todos state on handle addTodo', ()=>{
    var todotext = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({
      todos: []
    })
    todoApp.handleAddTodo(todotext);

    expect(todoApp.state.todos[0].text).toBe(todotext);



  })
} )
