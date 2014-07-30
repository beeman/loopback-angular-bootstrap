'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
