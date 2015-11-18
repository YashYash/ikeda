app.service('StateService', [function() {
  'use strict';
  console.log("#### State Service");

  var data = {
    "LandingController": {
      "isLoaded": false,
      "tracks": [],
      "currentTrack": {},
      "showOverlay": false,
      "fadeinOverlay": false,
      "showLogo": false,
      "showContent": false
    },
    "NavController": {
      "aboutClicked": false,
      "contactClicked": false
    }
  }


  return {
    data: data
  }
}])
