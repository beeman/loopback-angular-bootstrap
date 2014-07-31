'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .config(function($stateProvider) {
    $stateProvider.state('app.users', {
      abstract: true,
      url: '/users',
      templateUrl: 'partials/users.html',
      controller: 'UsersCtrl'
    })
    .state('app.users.list', {
      url: '',
      templateUrl: 'partials/users.list.html',
      controller: 'UsersCtrl'
    })
    .state('app.users.add', {
      url: '/add',
      templateUrl: 'partials/users.form.html',
      controller: 'UsersCtrl'
    })
    .state('app.users.edit', {
      url: '/:id/edit',
      templateUrl: 'partials/users.form.html',
      controller: 'UsersCtrl'
    })
    .state('app.users.view', {
      url: '/:id',
      templateUrl: 'partials/users.view.html',
      controller: 'UsersCtrl'
    });
  })
  .controller('UsersCtrl', function($scope) {

    $scope.message = 'User management goes here!';

  });
