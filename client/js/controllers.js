angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, User, $location, AppAuth) {

  AppAuth.ensureHasCurrentUser(User);

  $scope.appName = 'Loopback + AngularJS';

  $scope.currentUser = AppAuth.currentUser;

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

})

.controller('LoginCtrl', function($scope, $routeParams, User, $location, AppAuth) {
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
        $location.path(next);
      },
      function(res) {
        $scope.loginError = res.data.error;
      }
    );
  }
})
.controller('RegisterCtrl', function($scope, $routeParams, User, $location, AppAuth) {
  $scope.registration = {};

  $scope.register = function() {
    $scope.user = User.save($scope.registration,
      function() {
        // success
      },
      function(res) {
        $scope.registerError = res.data.error;
      }
    );
  }
});
