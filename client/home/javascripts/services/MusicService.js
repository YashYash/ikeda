app.service('MusicService', [
  '$firebaseArray',
  'StateService',
  function(
    $firebaseArray,
    StateService) {

    'use strict';
    console.log("#### Music Service");

    var musicRef = new Firebase("https://ikdea.firebaseio.com/Music");
    var tracks = $firebaseArray(musicRef);

    return {
      getTracks: function() {
        var tracks = $firebaseArray(musicRef);
        var result = tracks.$loaded().then(function(response) {
          StateService.data["LandingController"]["currentTrack"] = response[0];
          StateService.data["LandingController"]["tracks"] = response;
          return response;
        });
        return result;   
      },
      setCurrentTrack: function(index) {
        var tracks = $firebaseArray(musicRef);
        var result = tracks.$loaded().then(function(response) {
          StateService.data["LandingController"]["currentTrack"] = response[index];
          return response;
        });
        return result;        
      },
      createTrack: function(track) {
        var newTrack = {
          name: track.name,
          description: track.description,
          created: track.created,
          url: track.url,
          image: track.image,
          background: track.background
        }
        tracks.$add(newTrack).then(function(response) {
          console.log("Added the track");
          console.log(response);
        })
      }
    }
  }
])
