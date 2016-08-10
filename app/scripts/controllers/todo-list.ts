'use strict'
namespace app{
  interface ITodoListController{
    todoList: Array<any>;
    todoService: any;
  }

  class TodoListController implements ITodoListController{
    todoList: Array<any>;
    todoService: any;

    static $inject = ["$scope", "todoService"];    
    constructor(todoService: any) {
      this.todoService = todoService;
      this.todoList = [];
    }

    public markAsUncompleted(todo) : void {
      todo.completed = false;      
      this.todoService.update({id : todo.id}, todo, function(){}, function(){
        //on error
        todo.completed = true;
      });
    }
 
    public markAsCompleted(todo) : void {
      todo.completed = true;
      this.todoService.update({id : todo.id}, todo, function(){}, function(){
        //on error
        todo.completed = false;
      });
    }

    public deleteTodo(todo, index): void{
      this.todoService.delete({id: todo.id}, todo, function(){
          this.scope.todoList.splice(index,1);
      });
    }
  }

  angular.module('todoApp')
         .controller('TodoListController', TodoListController);
}
/*
angular.module('todoApp').controller('TodoListController', function($scope, todoService) {
  $scope.todoList = [];
  todoService.query(function(data){
     $scope.todoList = data; //???
  });
  
  $scope.markAsUncompleted = function(todo){
    todo.completed = false;
    todoService.update({id: todo.id}, todo, function(){
      //successful
    }, function(){
      //on error
      todo.completed = true;
    });
  }
  
  $scope.markAsCompleted = function(todo){
    todo.completed = true;
    todoService.update({id: todo.id} , todo, function(){
      //successful
    }, function(){
      //on error
      todo.completed = false;
    });
  }
  
  $scope.deleteTodo = function(todo, index){
    todoService.delete({id: todo.id}, todo, function(){
      $scope.todoList.splice(index,1);
    });
  }  
});*/