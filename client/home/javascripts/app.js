var app = angular.module('app', ['ionic', 'firebase']);
'use strict';

console.log('#### APP JS LOADED: app');
app.run(['$rootScope', function($rootScope) {
  console.log('#### App.js .run');
}]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
  console.log('#### State provider working');
  $urlRouterProvider.otherwise('/');
  $stateProvider

    .state('app', {
      url: '/',
      views: {
        'global': {
          templateUrl: '/home/views/global.html',
          controller: 'GlobalController'
        }
      }
    })
    .state('app.v1', {
      url: '',
      abstract: true,
      views: {
        'global@': {
          templateUrl: '/home/views/v1/v1.html',
          controller: 'RootController'
        },
        'nav@app.v1': {
          templateUrl: '/home/views/v1/nav.html',
          controller: 'NavController'
        },
        'content@app.v1': {
          templateUrl: '/home/views/v1/content.html',
          controller: 'ContentController'
        }
      }
    })
    .state('app.v1.landing', {
      url: 'landing',
      views: {
        'content@app.v1': {
          templateUrl: '/home/views/v1/landing.html',
          controller: 'LandingController'
        }
      }
    })
}]);

app.constant('moment', moment);
app.filter('moment', function() {
  return function(dateString, format, calendar) {
    if (format === 'calendar') {
      return moment(dateString).calendar();
    } else {
      return moment(dateString).format(format);
    }
  };
});

app.filter('trustUrl', function($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
});
