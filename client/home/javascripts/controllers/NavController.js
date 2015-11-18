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

    var textRef = new Firebase("https://ikdea.firebaseio.com/text");
    $scope.text = $firebaseObject(textRef);
    console.log($scope.text);

    $timeout(function() {
      $scope.showName = true;
      $timeout(function() {
        $scope.showLinkOne = true;
        $timeout(function() {
          $scope.showLinkTwo = true;
        }, 400);
      }, 400);
    }, 1200);

    /**
     * Ui-responders
     */
    $scope.stateData = function(key) {
      return StateService.data[key];
    };

    $scope.linkClicked = function(link) {
      StateService.data['LandingController'].showOverlay = true;
      // $scope.showName = false;
      // $scope.showLinkOne = false;
      // $scope.showLinkTwo = false;
      $timeout(function() {
        StateService.data['LandingController'].fadeinOverlay = true;
        $timeout(function() {
          StateService.data['LandingController'].showLogo = true;
          $timeout(function() {
            StateService.data['LandingController'].showContent = true;
          }, 400);
        }, 400);
      }, 400);
    };

    $rootScope.$on('hide overlay', function(e) {
      console.log("$$$$ HIDING OVERLAY");
      $timeout(function() {
        StateService.data['LandingController'].showContent = false;
        $timeout(function() {
          StateService.data['LandingController'].showLogo = false;
        }, 400);
      });
      $scope.showName = true;
      $scope.showLinkOne = true;
      $scope.showLinkTwo = true;
      StateService.data['LandingController'].showOverlay = false;
      StateService.data['LandingController'].fadeinOverlay = false;
    });

    $scope.hideOverlay = function() {

    }

    $scope.mouseLeftLink = function() {
      StateService.data['NavController'].aboutClicked = false;
      StateService.data['NavController'].contactClicked = false;
      // StateService.data['LandingController'].fadeinOverlay = false;
      // $timeout(function() {
      //   StateService.data['LandingController'].showOverlay = false;
      // }, 400);
    };

  }
]);
