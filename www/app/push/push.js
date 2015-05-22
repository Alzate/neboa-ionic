
angular.module('starter.controllers')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('tab.push', {
      url: '/push',
      views: {
        'tab-push': {
          templateUrl: 'app/push/push.html',
          controller: 'PushCtrl'
        }
      }
    });

  });
