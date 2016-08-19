'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */

namespace app {
  class MainController{
    private awesomeThings: Array<String> = [
      'HTML Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
  }

  angular.module('todoApp').controller('MainController', MainController);
}
