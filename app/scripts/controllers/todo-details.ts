namespace app{
  interface ITodoDetailsController{

  }

  class TodoDetailsController implements ITodoDetailsController{

    static $inject = ['$scope', 'todoService', '$routeParams', '$location'];
    constructor(private $scope: ng.IScope, private todoService: any, private $routeParams: any, private $location: any){

    }

    public save() : void {
      

    }
  }

  angular.module('todoApp').controller('TodoDetailsController', TodoDetailsController);
}

angular.module('todoApp').controller('TodoDetailsController', function($scope,todoService, $routeParams, $location) {
  if($routeParams.id){
    todoService.get({id: $routeParams.id}, function(data){
      $scope.todo = data;
    });
  }else{
    $scope.todo = {};
  }
  
  
  $scope.save = function(){
    if($scope.todo.id){
      todoService.update({id: $scope.todo.id}, $scope.todo, function(data){
        $scope.todo = data;
        alert("Saved successfully");
        $location.path('todo');
      });
    }else{
      todoService.save($scope.todo, function(data){
        $scope.todo = data; //now with ID
        alert("Saved successfully");
        $location.path('todo');
      });
    }
  }
});
