'use strict';

/* Controllers */

var projet = angular.module('projet');

projet.controller('CinemaController', ['$scope','CinemaService','$filter', function ( $scope, CinemaService, $filter ) {

    CinemaService.listCinema().then(function(response){
        $scope.items = response.data;

        $scope.map = { center: { latitude: 46.1577, longitude: -1.15359 }, zoom: 8 };

        $scope.markers = [];

        _.forEach($scope.items, function(item){
            var obj = {
                "id": item.id,
                "coord": {
                    "latitude": item.latitude,
                    "longitude": item.longitude
                }
            };

            $scope.markers.push(obj);
        });

    });

    $scope.$watch('search',function () {
       $scope.markers = [];

        $filter('filter')(array, expression, comparator, anyPropertyKey);

        _.forEach(array, function(item){
            var obj = {
                "id": item.id,
                "coord": {
                    "latitude": item.latitude,
                    "longitude": item.longitude
                }
            };

            $scope.markers.push(obj);
        });

    });
}]);
