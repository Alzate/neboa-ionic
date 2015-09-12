// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services', 'starter.directives'])

.run(function($ionicPlatform, $rootScope, $cordovaPush) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }
    
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "app/components/tabs.html"
  });

  $urlRouterProvider.otherwise('/tab/home');

})

.controller('AppController', function($scope, $rootScope, ngPush, PushService){
    $rootScope.$on('$cordovaPush:notificationReceived', ngPush.notificationReceived);

    $rootScope.hasPush = function(){
      return PushService.getPush();
    }
})
;

angular.module('starter.controllers', []);
angular.module('starter.directives', []);

angular.module('starter.services', [])
.run( function($ionicPlatform, $rootScope, $cordovaPush, ngPush){
  $ionicPlatform.ready(function() {
    ngPush.register();
    
  });
});
