
angular.module('starter.controllers')

.controller('ProductsCtrl', function($scope) {
  var cat = new Product('Cat', 'assets/img/cat.jpg', 'Lorem ipsum dolor');
  var skyrim = new Product('Skyrim', 'assets/img/skyrim.jpg', 'Lorem ipsum dolor');
  var ninja = new Product('Ninja', 'assets/img/white.jpg', 'Lorem ipsum dolor');
  $scope.products = [skyrim, cat, ninja];
});

var Product = function(title, image, description) {
  this.title = title;
  this.image = image;
  this.description = description;
};
