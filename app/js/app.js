'use strict';

angular.module('myApp', ['ngMaterial', 'projet','uiGmapgoogle-maps','ui.router'])
    .config(function ($stateProvider,$urlRouterProvider) {

        $stateProvider.state({
            name:'film',
            url : '/film/:id',
            templateUrl: 'views/listFilm.html',
            controller: 'FilmController'});
        $stateProvider.state({
            name:'index',
            url : '/',
            templateUrl: 'views/listCinema.html',
            controller: 'CinemaController'});

        $urlRouterProvider.when('', '/');

    });

angular.module('projet',[]);


