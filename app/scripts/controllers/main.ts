'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */

namespace app{
  class MainController{
    private awesomeThings: Array<String> = [
      'HTML Boilerplate',
      'AngularJS',
      'Karma'
    ];
    static $inject = [];
  }

  angular.module('todoApp').controller('MainController', MainController);
}


/*angular.module('todoApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });*/
