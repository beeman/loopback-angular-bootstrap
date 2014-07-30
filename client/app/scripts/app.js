'use strict';

/**
 * @ngdoc overview
 * @name loopbackApp
 * @description
 * # loopbackApp
 *
 * Main module of the application.
 */
angular
  .module('loopbackApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'lbServices'
  ])

  .config(function ($compileProvider){
    // Needed for routing to work
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
  })

  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/register', {
        template: '<register></register>',
        controller: 'RegisterCtrl'
      })
      .when('/login', {
        template: '<login></login>',
        controller: 'LoginCtrl'
      })
      .when('/logout', {
        template: '<h1>Handle logout!</h1>',
        controller: function() {

        }
      })
      .otherwise({
        redirectTo: '/home'
      });


      // Intercept 401 responses and redirect to login screen
      $httpProvider.interceptors.push(function($q, $location, AppAuth) {
        return {
          responseError: function(rejection) {
            console.log('intercepted rejection of ', rejection.config.url, rejection.status);

            if (rejection.status == 401) {
              AppAuth.currentUser = null;
              // save the current location so that login can redirect back
              $location.nextAfterLogin = $location.path();

              if($location.path() !== '/register') {
                $location.path('/login');
              }
            }
            return $q.reject(rejection);
          }
        };
      });
  })

  .run(function($rootScope, $location, AppAuth) {
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
      console.log('AppAuth.currentUser', AppAuth.currentUser);
      console.log('$location.path()', $location.path());
    });
  });
