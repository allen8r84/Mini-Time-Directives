var app = angular.module('theApp');

//this references the-time in html it has to be camelcase and no dashes
app.directive('theTime', function(){
    return {
        restrict: 'E',
        /*use code instead of URL to a file since it is small*/
        template: '<div>The Current time is: {{time | date: "medium"}}</div>',
        link: function($scope, element, attr) {
         
            $scope.time = Date.now();
            
        }
    }
});