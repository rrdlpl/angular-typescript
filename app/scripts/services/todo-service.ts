angular.module('todoApp').service('todoService', function($http: ng.IHttpService ,$resource: ng.resource.IResourceService){
  return $resource("http://agile-meadow-25662.herokuapp.com/sgarcesg/todos/:id",null,
    {
        'update': { method:'PUT' }
    });
});


   