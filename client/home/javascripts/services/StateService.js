app.service('StateService', [function() {
  'use strict';
  console.log("#### State Service");

  var data = {
    "LandingController": {
      "isLoaded": false,
      "tracks": [],
      "currentTrack": {}
    },
    "NavController": {}
  }


  return {
    data: data
  }
}])
