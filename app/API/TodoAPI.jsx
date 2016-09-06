var $ = require('jquery');
module.exports = {
  setTodos:function(todos){
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos:function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try
    {
        todos = JSON.parse(stringTodos);
    }
    catch(e){

    }
    return $.isArray(todos) ? todos : [];


  },
  filterTodos:function(todos, showCompleted, searchText){
    var filteredTodos = todos;
    // filder by show completed
    filteredTodos = filteredTodos.filter((todo)=>{
      return !todo.completed || showCompleted

    })

    //filter by search text
    //  filteredTodos = filteredTodos.filter((todo)=>{
    //    return
    //  })
    if(searchText.length > 0){
      filteredTodos = filteredTodos.filter((todo)=>{
        return todo.text.toLowerCase().indexOf(searchText) != -1;

      })
    }

    //Sort todos with non-completed first
    filteredTodos.sort((a, b)=>{
      if(!a.completed  && b.completed){
        return -1;
      } else if(a.completed && !b.completed){
        return 1;
      }
      else{
        return 0;
      }
    })

    return filteredTodos;
  }

};
