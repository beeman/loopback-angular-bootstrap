'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:AppCtrl
 * @description
 * # MainCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .controller('MainCtrl', function ($scope, $state, $location, $notification, AppAuth, User) {

    AppAuth.ensureHasCurrentUser(User);
    $scope.currentUser = AppAuth.currentUser;

    $scope.appName = 'Loopback + AngularJS + Bootstrap';

    $scope.menuoptions = [{
      text: 'Home',
      action: function() {
        $location.path('/home');
      }
    } , {
      text: 'Dashboard',
      action: function() {
        $location.path('/dashboard');
      }
    } , {
      text: 'App',
      action: function() {
        $location.path('/app');
      }
    }];

    $scope.toplinks = [{
      text: 'Logout',
      action: function() {
        User.logout(function() {
          $scope.currentUser = AppAuth.currentUser = null;
          $state.go('login');
          $notification.info('Logged out', 'You are logged out!');
        });
      }
    }];

  });
