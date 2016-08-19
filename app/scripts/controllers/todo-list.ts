'use strict'
namespace app{
  interface ITodoListController{
    todoList: Array<any>;
    todoService: ng.resource.IResourceClass<any>;
  }

  class TodoListController implements ITodoListController{
    todoList: Array<any>;
    todoService: any;

    static $inject = ["todoService"];    
    constructor(todoService: ng.resource.IResourceClass<any>) {
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
          this.todoList.splice(index,1);
      });
    }
  }

  angular.module('todoApp')
         .controller('TodoListController', TodoListController);
}
