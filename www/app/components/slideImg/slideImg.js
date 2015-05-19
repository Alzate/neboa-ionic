angular.module('starter').directive('slideImg', function($ionicSlideBoxDelegate) {
  return {
    templateUrl: 'app/components/slideImg/slideImg.html',
    scope:{
      img:'=img'
    },
    restrict: 'EAC',
    replace:true,
    link:function(){
      $ionicSlideBoxDelegate.update();
    }
  };
});
