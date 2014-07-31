'use strict';

/**
 * @ngdoc overview
 * @name loopbackApp
 * @description
 * # loopbackApp
 *
 * Main module of the application.
 */
angular.module('loopbackApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'lbServices',
  'notifications'
])

.config(function($compileProvider) {
  // Needed for routing to work
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/app');

  $stateProvider
    .state('app', {
      abstract: true,
      url: '/app',
      templateUrl: 'views/app.html',
      controller: 'MainCtrl'
    })

      .state('app.home', {
        url: '',
        templateUrl: 'partials/home.html',
        controller: function($scope) {
          $scope.message = 'Welcome home, this is AngularJS!';
        }
      })

      .state('app.items', {
        abstract: true,
        url: '/items',
        templateUrl: 'partials/items.html',
        controller: 'ItemsCtrl'
      })

        .state('app.items.list', {
          url: '',
          templateUrl: 'partials/items.list.html',
          controller: 'ItemsCtrl'
        })
        .state('app.items.add', {
          url: '/add',
          templateUrl: 'partials/items.form.html',
          controller: 'ItemsCtrl'
        })
        .state('app.items.edit', {
          url: '/:id/edit',
          templateUrl: 'partials/items.form.html',
          controller: 'ItemsCtrl'
        })
        .state('app.items.view', {
          url: '/:id',
          templateUrl: 'partials/items.view.html',
          controller: 'ItemsCtrl'
        })



      .state('app.users', {
        url: '/users',
        templateUrl: 'partials/users.html',
        controller: 'UsersCtrl'
      })



    .state('login', {
      url: '/login',
      template: '<login></login>',
      controller: 'LoginCtrl'
    })

    .state('register', {
      url: '/register',
      template: '<register></register>',
      controller: 'LoginCtrl'
    });

})

.config(function($routeProvider, $httpProvider) {

  // Intercept 401 responses and redirect to login screen
  $httpProvider.interceptors.push(function($q, $location, AppAuth) {
    return {
      responseError: function(rejection) {
        console.log('intercepted rejection of ', rejection.config.url, rejection.status);

        if (rejection.status === 401) {
          AppAuth.currentUser = null;
          // save the current location so that login can redirect back
          $location.nextAfterLogin = $location.path();

          if ($location.path() !== '/register') {
            $location.path('/login');
          }
        }
        return $q.reject(rejection);
      }
    };
  });
});
