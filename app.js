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
        var parentPosition = element.getBoundingClientRect();
        console.log("new Delta x", h.x);
      };

      var handle = document.getElementById("scaling-handle");

      draggable(handle);
      handle.whenDragging(_updatePosition("drag"));
    }
  };
});

