
'use strict';

/* Services */

var projet = angular.module('projet');

projet.factory('CinemaService', ['$http', function ($http) {

    return {
        listCinema: function () {
            return $http.get("http://localhost/cinema/cinema/REST/projet_angular/public/index.php/cinema");
        },

        getCinema: function (id) {
            return $http.get("http://localhost/cinema/cinema/REST/projet_angular/public/index.php/cinema/" + id);
        },

        getFilmCinema: function (id) {
            return $http.get("http://localhost/cinema/cinema/REST/projet_angular/public/index.php/cinema/" + id + "/film");
        },

        getFilmHoraireFromCinema: function (id_film, id_cinema) {
            return $http.get("http://localhost/cinema/cinema/REST/projet_angular/public/index.php/cinema/" + id_film + "/film/" + id_cinema + "/horaire/");
        }
    };
}]);