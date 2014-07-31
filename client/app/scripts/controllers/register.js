'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .controller('RegisterCtrl', function($scope, $routeParams, $location, $notification, User, AppAuth) {
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
          $notification.success('You are now registered!', 'Please log in!');
        },
        function(res) {
          $notification.warning('Error registering!', res.data.error.message);
          $scope.registerError = res.data.error;
        }
      );
    };
  });
