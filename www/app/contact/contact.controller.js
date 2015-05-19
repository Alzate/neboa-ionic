angular.module('starter.controllers')

.controller('ContactCtrl', function($scope, $cordovaSocialSharing) {

  $scope.zoom = 13;
  $scope.lat = 39.476918;
  $scope.lng = -0.381689;
  $scope.title = 'My Place';


  $scope.share = function() {
    $cordovaSocialSharing
      .share('this is a message', 'subject') // Share via native share sheet
      .then(function(result) {
        // Success!
        console.log("Success");
      }, function(err) {
        // An error occured. Show a message to the user
        console.log("Error");
      });
  };


});
