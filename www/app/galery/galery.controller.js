
angular.module('starter.controllers')

.controller('GaleryCtrl', function($scope, $ionicSlideBoxDelegate) {
  $scope.images = [new ImageSlide(null, 'assets/img/skull.jpg'),new ImageSlide(null, 'assets/img/eye.jpg'), new ImageSlide(null, 'assets/img/angel.jpg'), new ImageSlide(null, 'assets/img/skyrim.jpg')];
  $ionicSlideBoxDelegate.update();
});

var ImageSlide = function(title, path){
  this.title = title;
  this.path = path;
};
