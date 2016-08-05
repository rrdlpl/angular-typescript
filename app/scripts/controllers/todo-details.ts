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

angular.module('todoApp').service('todoService', function($http,$resource){
  return $resource("http://agile-meadow-25662.herokuapp.com/sgarcesg/todos/:id",null,
    {
        'update': { method:'PUT' }
    });
});

angular.module('todoApp').directive('pslActive', function() {
  return {
    restrict: 'A',
    scope: {
      path : '@'
    },
    link: function(scope, element, attr) {
      scope.$on('$routeChangeStart', function(next, current) { 
       if(current.$$route)
       if(current.$$route.originalPath.match(scope.path)){
         attr.$addClass("active");
       }else{
         attr.$removeClass("active");
       }
     });
    }
  };
});