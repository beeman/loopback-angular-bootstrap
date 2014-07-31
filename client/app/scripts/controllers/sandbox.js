'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:SandboxCtrl
 * @description
 * # SandboxCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .controller('SandboxCtrl', function ($scope, $notification) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.notification = {
      title: 'Notify me!',
      text: 'This is the body!'
    };


    $scope.notify = function() {
      $notification.info($scope.notification.title, $scope.notification.text, $scope.notification);
      $notification.error($scope.notification.title, $scope.notification.text);
      $notification.success($scope.notification.title, $scope.notification.text);
      $notification.warning($scope.notification.title, $scope.notification.text);
    };

  });
