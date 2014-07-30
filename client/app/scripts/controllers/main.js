'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:AppCtrl
 * @description
 * # MainCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .controller('MainCtrl', function ($scope, $location, AppAuth, User) {

    AppAuth.ensureHasCurrentUser(User);
    $scope.currentUser = AppAuth.currentUser;

    $scope.appName = 'Loopback + AngularJS + Bootstrap';

    $scope.menuoptions = [{
      text: 'Home',
      action: function() {
        $location.path('/home');
      }
    }];

    $scope.toplinks = [{
      text: 'Logout',
      action: function() {
        User.logout(function() {
          $scope.currentUser = AppAuth.currentUser = null;
          $location.path('/');
        });
      }
    }];

  });
