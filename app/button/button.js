var app = angular.module('theApp');

app.directive('domButton', function() {
    return {
      restrict: 'A',
      link: function($scope, element, attr) {
            element.bind('click', function() {
              element.html('<span class="glyphicon glyphicon-ok"></span>');
              element.addClass('circle');
            });    
      }
    };
});