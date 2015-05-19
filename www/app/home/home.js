
angular.module('starter.controllers')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'app/home/home.html',
          controller: 'HomeCtrl'
        }
      }
    });

  });
