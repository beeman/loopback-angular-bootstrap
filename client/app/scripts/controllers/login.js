'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .controller('LoginCtrl', function ($scope, $routeParams, $location, $notification, User, AppAuth) {
    $scope.credentials = {
      email: 'foo@bar.com',
      password: '123456'
    };

    $scope.login = function() {
      $scope.loginResult = User.login({
          include: 'user',
          rememberMe: true
        }, $scope.credentials,
        function() {
          var next = $location.nextAfterLogin || '/';
          $location.nextAfterLogin = null;
          AppAuth.currentUser = $scope.loginResult.user;
          $notification.success('Logged in', 'You are logged in!');

          if(next === '/login') {
            next = '/';
          }
          $location.path(next);
        },
        function(res) {
          $notification.warning('Error signin in!', res.data.error.message);
          $scope.loginError = res.data.error;
        }
      );
    };
  });
