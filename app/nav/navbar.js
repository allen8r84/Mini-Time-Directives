var app = angular.module('theApp');

app.directive('navbar', function(){
   return {
       restrict: 'E',
       templateUrl: './app/nav/navbar.html'
   };
});