angular.module('starter').directive('nainMap', function() {
  return {
    template: '<div id="map"></div>',
    restrict: 'EAC',
    replace: true,
    link: function(scope, element, attr) {

      var mapOptions = {
        center: new google.maps.LatLng(scope.lat, scope.lng),
        zoom: scope.zoom,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(document.getElementById("map"), mapOptions);

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(scope.lat, scope.lng),
        map: map,
        title: scope.title,
        animation: google.maps.Animation.DROP
      });
    }
  };
});
