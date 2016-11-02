'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngMaterial', 'projet','uiGmapgoogle-maps','ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when('', '/');

        $stateProvider.state({
            name:'index',
            url:'/',
            templateUrl: 'views/listCinema.html',
            controller: 'CinemaController'
        });

        $stateProvider.state({
            name:'film',
            url:'/film/:id',
            templateUrl: 'views/listFilm.html',
            controller: 'FilmController'
        });
    });

angular.module('projet',[]);
