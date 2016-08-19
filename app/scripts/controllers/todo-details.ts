namespace app {
  interface ITodoDetailsController {
    save();
  }

  class TodoDetailsController implements ITodoDetailsController {
    private todo: any;
    static $inject = ['todoService', '$routeParams', '$location'];

    constructor(private todoService: ng.resource.IResourceClass<any>, private $routeParams: any, private $location: ng.ILocationService) {
      if ($routeParams.id) {
        this.todoService.get({ id: $routeParams.id }, function (data) {
          this.todo = data;
        });
      } else {
        this.todo = {};
      }
    }

    public save(): void {
      this.todoService.save(this.todo, function (data) {
        this.scope.todo = data; //now with ID
        alert("Saved successfully");
        this.$location.path('todo');
      });
    }
  }

  angular.module('todoApp').controller('TodoDetailsController', TodoDetailsController);
}

