'use strict';

angular.module('myApp', ['ngMaterial', 'projet','uiGmapgoogle-maps','ui.router'])
    .config(function ($stateProvider,$urlRouterProvider, uiGmapGoogleMapApiProvider) {
		
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

		uiGmapGoogleMapApiProvider.configure({
			china: false
		});

		$urlRouterProvider.when('', '/');

    });

angular.module('projet',[]);

