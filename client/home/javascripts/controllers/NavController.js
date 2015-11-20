app.controller('NavController', [
  '$scope',
  '$rootScope',
  '$state',
  'StateService',
  '$timeout',
  '$firebaseObject',
  function(
    $scope,
    $rootScope,
    $state,
    StateService,
    $timeout,
    $firebaseObject) {
    'use strict';
    console.log('#### Nav Controller');

    /**
     * Init
     */

    var textRef = new Firebase("https://pheir.firebaseio.com//text");
    var imagesRef = new Firebase("https://pheir.firebaseio.com//images");
    $scope.text = $firebaseObject(textRef);
    $scope.images = $firebaseObject(imagesRef);
    console.log($scope.text);  
    console.log($scope.images);

    $timeout(function() {
      $scope.showName = true;
      $timeout(function() {
        $scope.showLinkOne = true;
      }, 400);
    }, 1200);

    /**
     * Ui-responders
     */
    $scope.stateData = function(key) {
      return StateService.data[key];
    };

    $scope.showOverlay = function() {
      console.log("@@@SOING")
      $scope.showName = false;
      $scope.showLinkOne = false;
      $scope.showAboutOverlay = true;
      $scope.fadeInAboutOverlay = true;
    };

    $scope.hideOverlay = function() {
      $scope.showName = true;
      $scope.showLinkOne = true;    
      $scope.fadeInAboutOverlay = false;  
      $timeout(function() {
        $scope.showAboutOverlay = false;
      }, 400);
    };

  }
]);
