angular.module('starter.controllers')
.controller('HomeCtrl', function($scope, $state, PushService){
	$scope.push = function(){
		var push = {
			title:'Titulo de la notificacion',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi reiciendis perspiciatis, rem placeat ratione distinctio est doloremque quo quas deserunt nesciunt, possimus in illo nam sed iusto cumque porro libero?',
			image:'assets/img/LogoNeboa.png'
		};
		PushService.setPush(push);
		$state.go('tab.push');
	}
});
