'use strict';
namespace app {
  interface saveableController {
    awesomeThings: Array<string>;
    onSave(): ng.IPromise<any>;
  }

  class AboutController implements saveableController {
    public awesomeThings: Array<string> = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    static $inject = [];
    constructor(private $q: ng.IQService) { }

    public onSave() {
      return this.$q.defer().promise;
    }
  }

  angular.module('todoApp')
    .controller('AboutCtrl', AboutController);
}
