
angular.module('starter.controllers')

.controller('GaleryCtrl', function($scope, $ionicSlideBoxDelegate) {
    $scope.images = [new ImageSlide(null, 'assets/img/1.jpg'),new ImageSlide(null, 'assets/img/2.jpg'), new ImageSlide(null, 'assets/img/IMG_0614.JPG'), new ImageSlide(null, 'assets/img/IMG_0637.JPG'),
                    new ImageSlide(null, 'assets/img/IMG_0802.JPG')];
  $ionicSlideBoxDelegate.update();
});

var ImageSlide = function(title, path){
  this.title = title;
  this.path = path;
};
