'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .config(function($stateProvider) {
    $stateProvider.state('app.home', {
      url: '',
      templateUrl: 'views/home.html',
      controller: function($scope) {
        $scope.message = 'Welcome home, this is AngularJS!';
      }
    });
  })
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
