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
      name: 'Home',
      sref: '.home'
    } , {
      name: 'Items',
      sref: '.items.list'
    // } , {
    //   name: 'Users',
    //   sref: '.users'
    }];

    $scope.toplinks = [{
      name: 'Logout',
      action: function() {
        User.logout(function() {
          $scope.currentUser = AppAuth.currentUser = null;
          $state.go('login');
          $notification.info('Logged out', 'You are logged out!');
        });
      }
    }];

  });
