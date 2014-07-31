'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:ItemsCtrl
 * @description
 * # ItemsCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .controller('ItemsCtrl', function ($scope, $state, $stateParams, $notification) {

    $scope.item = $stateParams.id;

    $scope.newItem = {};

    $scope.message = 'Manage your items here!';

    $scope.items = [
      {id: 1, 'name': 'Item 1 '},
      {id: 2, 'name': 'Item 2 '},
      {id: 3, 'name': 'Item 3 '},
      {id: 4, 'name': 'Item 4 '},
      {id: 5, 'name': 'Item 5 '},
      {id: 6, 'name': 'Item 6 '}
    ];

    $scope.add = function() {
      console.log('Adding new item!');
      console.log($scope.newItem);
      $state.go('^.list');
      $notification.success('Item added', 'Your item is safe with us!');
    }
});
