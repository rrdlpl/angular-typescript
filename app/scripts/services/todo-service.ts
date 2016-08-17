/*

namespace app{
    class TodoService{
        static $inject = ["$http", "$resource"];

         constructor(private $http: any, private $resource: any) {
         }

    

    }

    angular.module('todoApp').service('todoService', TodoService);
}
*/

angular.module('todoApp').service('todoService', function($http,$resource){
  return $resource("http://agile-meadow-25662.herokuapp.com/sgarcesg/todos/:id",null,
    {
        'update': { method:'PUT' }
    });
});

   