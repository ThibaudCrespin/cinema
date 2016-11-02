'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router']).
config(['$stateProvider',  function($stateProvider) {
    $stateProvider.state('cinema', {
        url:'/cinema',
        templateUrl: 'cinema.html',
        controller: 'cinemaController'
    });

    $stateProvider.state('cinema.film', {
        url:'/cinema/:filmId',
        templateUrl: 'film.html',
        controller: 'filmController'
    });
}]);

