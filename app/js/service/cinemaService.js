
'use strict';

/* Services */

var projet = angular.module('projet');

projet.factory('CinemaService', ['$http', function ($http) {

    return {
        listCinema: function () {
            return $http.get("data/Cinema.json");
        }
    };
}]);