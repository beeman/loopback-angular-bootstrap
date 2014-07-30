'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .controller('RegisterCtrl', function($scope, $routeParams, User, $location, AppAuth) {
    $scope.registration = {
      firstName: 'me',
      lastName: 'me',
      email: 'me@me.me',
      password: 'meme'
    };

    $scope.confirmPassword = 'meme';

    $scope.register = function() {

      console.log('reg');

      $scope.user = User.save($scope.registration,
        function() {
          $location.path('/login');
        },
        function(res) {
          $scope.registerError = res.data.error;
        }
      );
    };
  });
