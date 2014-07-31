'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:ItemsCtrl
 * @description
 * # ItemsCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .config(function($stateProvider) {
    $stateProvider.state('app.items', {
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
    });
  })

.controller('ItemsCtrl', function($scope, $state, $stateParams, $notification, Item) {

  var itemId = $stateParams.id;

  if (itemId) {
    $scope.item = Item.findById({
      id: itemId
    }, function() {}, function(err) {
      console.log(err);
    });
  }

  $scope.message = 'Manage your items here!';

  function loadItems() {
    $scope.items = Item.find();
  }

  loadItems();

  $scope.save = function() {
    Item.upsert($scope.item, function() {
      $notification.success('Item added', 'Your item is safe with us!');
      $state.go('^.list');
    }, function(err) {
      console.log(err);
    });
  };

  $scope.delete = function(id) {
    if (confirm('Are you sure?') === false) {
      $notification.success('Delete canceled!', 'Yay!!');
      return false;
    }
    Item.deleteById(id, function() {
      $notification.success('Item deleted', 'Your item is deleted!');
      loadItems();
    }, function(err) {
      $notification.success('Error deleting item', 'Your item is note deleted! ' + err);
    });

  };
});
