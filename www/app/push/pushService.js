angular.module('starter.services')
.factory("PushService", function($rootScope, $state, $location, $stateParams) {
  this.push = {
    title: "",
    html: "",
    text: ""
  };

  var service = {};

  service.setPush = function(push) {
    this.push = push;
  };

  service.getPush = function() {
    return this.push;
  };

  service.pushHandle = function(json) {
      this.push = json;
      $state.go('tab.push');
  };

  service.uploadHash = function(key) {
    alert("hash: "+key);
    var os = device.platform || '';
    $rootScope.hash = key;
    console.log("hash: "+key);
    localStorage.setItem('hash', JSON.stringify(key));
    var params = {
      key: key,
      os: os,
    };
    // var url = 'serviciosvarios/register_push.php';
    // return $http.post('', params);
  };
  return service;

});
