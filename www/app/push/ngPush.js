angular.module('starter.services')
.factory('ngPush', function($cordovaPush, $q, $rootScope, PushService, $cordovaDialogs){
	var service = {};
	var config = {
		"senderID": "898174764889",
		"badge": true,
		"sound": true,
		"alert": true,
	};

	service.registerHash = function(){
		return $q(function(resolve, reject){
			document.addEventListener("deviceready", function(){
				$cordovaPush.register(config).then(function(result) {
					resolve(result);
				}, function(err) {
					alert("Error registering: "+err);
					reject(err);
				});
			}, false);
		});
	};

	service.unregister = function(options){
		var promise = $q(function(resolve, reject){
			document.addEventListener("deviceready", function(){
				$cordovaPush.unregister(options).then(function(result) {
					resolve(result);
				}, function(err) {
					alert("Error unregistering: "+err);
					reject(err);
				});
			}, false);
		});

		return promise;
	};

	service.register = function(){
		var promise = $q(function(resolve, reject){
			service.registerHash().then(function(data){
				PushService.uploadHash(data);
			}, function(err){
				alert("Error push. "+err);
			});
		});
		return promise;
	};

	service.notificationReceived = function(event, notification) {
		alert("notification received");
		if (ionic.Platform.isAndroid()) 
			service.handleAndroid(notification);
		else {            
			service.handleIOS(notification);
		}
	};

	service.handleAndroid = function(notification){
		switch(notification.event) {
			case 'registered':
			if (notification.regid.length > 0 ) {
				PushService.uploadHash(notification.regid);
			}
			break;
			case 'message':
			PushService.pushHandle(notification.payload);            
			break;
			case 'error':
			alert('GCM error = ' + notification.msg);
			break;

			default:
			alert('An unknown GCM event has occurred');
			break;
		}
	};

	service.handleIOS = function(notification){
		PushService.pushHandle(notification);
		if (notification.message && notification.title && notification.tipo !== 'chat') 
			$cordovaDialogs.alert(notification.message, notification.title);

		if (notification.sound) {
			var snd = new Media(event.sound);
			snd.play();
		}

		if (notification.badge) {
			$cordovaPush.setBadgeNumber(notification.badge).then(function (result) {
				console.log("Set badge success " + result)
			}, function (err) {
				console.log("Set badge error " + err)
			});
		}
	};

	return service;
});