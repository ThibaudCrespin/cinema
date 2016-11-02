/**
 * Created by crespin on 02/11/2016.
 */
'use strict';

/* Controllers */

var projet = angular.module('projet');

projet.controller('CinemaController', ['$scope','CinemaService','$filter', function ($scope, CinemaService, $filter) {

    CinemaService.listCinema().then(function(response){
        $scope.items = response.data;

    });

    //$scope.map = { center: { latitude: 46.1577, longitude: -1.15359 }, zoom: 8 };

}]);