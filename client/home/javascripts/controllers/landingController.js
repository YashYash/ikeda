app.controller('LandingController', [
  '$scope',
  '$state',
  '$timeout',
  '$rootScope',
  '$sce',
  'MusicService',
  'StateService',
  '$ionicSlideBoxDelegate',
  function(
    $scope,
    $state,
    $timeout,
    $rootScope,
    $sce,
    MusicService,
    StateService,
    $ionicSlideBoxDelegate) {
    'use strict';
    console.log('#### Landing Controller');

    /**
     * Init
     */

    $scope.currentTrackIndex = 0;
    $scope.trackVisibility = false;
    // Assign the cards to StateService
    MusicService.getTracks().then(function() {
      $ionicSlideBoxDelegate.update();
      $scope.trackVisibility = true;
    });

    $timeout(function() {
      $scope.showContent = true;
      console.log("#### SHOWING CONTENT");
      $timeout(function() {
        $scope.fadeInContent = true;
      }, 400);
    }, 2000);
    /**
     * UI-responders
     */

    // Bind dom to StateService
    $scope.getState = function(key) {
      return StateService.data[key];
    };

    $scope.slideHasChanged = function(index) {
      $timeout(function() {
        MusicService.setCurrentTrack(index);
      }, 500);
    };
    $scope.dragging = function(e) {
      $scope.trackVisibility = false;
    };
    $scope.dragReleased = function() {
      $scope.trackVisibility = true;
    };
    $scope.nextTrack = function() {
      if ($scope.currentTrackIndex < StateService.data['LandingController'].tracks.length - 1) {
        $timeout(function() {
          $scope.trackVisibility = false;
          $timeout(function() {
            $scope.currentTrackIndex = $scope.currentTrackIndex + 1;
            MusicService.setCurrentTrack($scope.currentTrackIndex);
            $ionicSlideBoxDelegate.next();
            $timeout(function() {
              $scope.trackVisibility = true;
            }, 50);
          }, 400);
        });
      }
    };
    $scope.prevTrack = function() {
      if ($scope.currentTrackIndex > 0) {
        $timeout(function() {
          $scope.trackVisibility = false;
          $timeout(function() {
            $scope.currentTrackIndex = $scope.currentTrackIndex - 1;
            MusicService.setCurrentTrack($scope.currentTrackIndex);
            $ionicSlideBoxDelegate.previous();
            $timeout(function() {
              $scope.trackVisibility = true;
            }, 50);
          }, 400);
        });
      }
    };
  }
]);
