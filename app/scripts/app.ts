'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular
  .module('todoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'vm'
      })
      .when('/todo', {
        templateUrl: 'views/todoList.html',
        controller: 'TodoListController',
        controllerAs: 'vm'
      }).
      when('/todo/details/:id', {
        templateUrl: 'views/todo.html',
        controller: 'TodoDetailsController',
        controllerAs: 'vm'

      }).
      when('/todo/details', {
        templateUrl: 'views/todo.html',
        controller: 'TodoDetailsController',
        controllerAs: 'vm'
      }).
      otherwise({
        redirectTo: '/'        
      });
  });
