angular.module('starter.controllers')

.controller('PushCtrl', function($scope, PushService) {
	$scope.push = PushService.push;
});
