var app = angular.module('theApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: './app/main.html',
        controller: 'MainController'
    })
    .when('/friends', {
        templateUrl: './app/friends/friends.html',
        controller: 'FriendsController'
    });
    
    /*$locationProvider.html5Mode(true);*/
    
});