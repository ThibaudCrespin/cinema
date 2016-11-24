
'use strict';

/* Services */

var projet = angular.module('projet');

projet.factory('CinemaService', ['$http', function ($http) {

    return {
        listCinema: function () {
            return $http.get(params.URL);
        },

        getCinema: function (id) {
            return $http.get(params.URL + id);
        },

        getFilmCinema: function (id) {
            return $http.get(params.URL + id + "/film");
        },

        getFilmHoraireFromCinema: function (id_film, id_cinema) {
            return $http.get(params.URL + id_film + "/film/" + id_cinema + "/horaire");
        }
    };
}]);