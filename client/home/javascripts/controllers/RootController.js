app.controller('RootController', [
  '$scope',
  '$rootScope',
  'StateService',
  '$state',
  '$firebaseObject',
  function(
  	$scope,
    $rootScope,
    StateService,
    $state,
    $firebaseObject) {
    'use strict';
    console.log('#### Root Controller');

    /**
     * Init
     */

    var textRef = new Firebase("https://ikdea.firebaseio.com/text");
    var imagesRef = new Firebase("https://ikdea.firebaseio.com/images");
    $scope.text = $firebaseObject(textRef);
    $scope.images = $firebaseObject(imagesRef);
    console.log($scope.text);  
    console.log($scope.images);  
       
     $scope.loadingBackground = "https://i1.sndcdn.com/avatars-000149345754-605ljy-t500x500.jpg";
     $scope.aboutText = "Lorem ipsum afea acea adcea greh sbr brs gsvrs re svregsdfg avra fae Lorem ipsum afea acea adcea greh sbr brs gsvrs re svregsdfg avra fae Lorem ipsum afea acea adcea greh sbr brs gsvrs re svregsdfg avra fae. Lorem ipsum afea acea adcea greh sbr brs gsvrs re svregsdfg avra fae . Lorem ipsum afea acea adcea greh sbr brs gsvrs re svregsdfg avra faeLorem ipsum afea acea adcea greh sbr brs gsvrs re svregsdfg avra fae. Lorem ipsum afea acea adcea greh sbr brs gsvrs re svregsdfg avra fae";

    /**
     * Ui-resonders
     */
    $scope.stateData = function(key) {
      return StateService.data[key];
    };

    $scope.hideOverlay = function() {
    	$rootScope.$emit('hide overlay');
    }

  }
]);
