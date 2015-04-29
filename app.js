var myApp = angular.module('myApp', []);

myApp.controller('ExampleController', function($scope) {
  $scope.example = "hi";
});

myApp.directive('scaleTransform', function() {
  return {
    template: '<div id="scaling-handle">x</div>',
    restrict: 'A',
    link:function(scope, el, attr) {

      var element = el[0];
      var _updatePosition = function(type) { return function(event) {
        _scaleElement({
          "x": event.x,
          "y": event.y
        });
        //console.log(event.x);
      }};
      var _scaleElement = function(h){

        var computedMarginLeft = parseInt(window.getComputedStyle(element).getPropertyValue("margin-left").replace('px',''));

        console.log(element.offsetLeft + element.offsetWidth);
        console.log(h.x);
        var xDelta = ((element.offsetLeft + element.offsetWidth ) - h.x - computedMarginLeft) * -1;
        var ratio = (element.offsetWidth + xDelta) /  element.offsetWidth;
        element.style.transformOrigin = "0 0";
        element.style.transform = "scale(" + ratio + ")";
      };

      var handle = document.getElementById("scaling-handle");

      draggable(handle);
      handle.whenDragging(_updatePosition("drag"));
    }
  };
});

