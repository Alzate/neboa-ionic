
angular.module('starter.controllers')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('tab.push', {
      url: '/push',
      views: {
        'tab-home': {
          templateUrl: 'app/push/push.html',
          controller: 'PushCtrl'
        }
      }
    });

  });
