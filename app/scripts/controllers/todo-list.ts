angular.module('todoApp').controller('TodoListController', function($scope, todoService) {
  $scope.todoList = [];
  todoService.query(function(data){
     $scope.todoList = data;
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
});