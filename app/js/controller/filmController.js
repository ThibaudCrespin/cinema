/**
 * Created by crespin on 02/11/2016.
 */
'use strict';

angular.module('projet')
    .controller('FilmController',['$scope','CinemaService','$stateParams','$mdDialog', function($scope,CinemaService,$stateParams,$mdDialog) {
        $scope.item = {};

        CinemaService.getFilmCinema($stateParams.id).success(function (data) {
            $scope.item = data;
        });

        $scope.map = { center: { latitude: 46.1577, longitude: -1.15359 }, zoom: 8 };

        CinemaService.getCinema($stateParams.id).success(function (data) {

            $scope.marker = {
                id: 0,
                coords: {
                    latitude: data[0].latitude,
                    longitude: data[0].longitude
                }
            };
        });

        $scope.showHoraire = function(film,$event){
            $mdDialog.show({
                targetEvent: $event,
                hasBackdrop:true,
                template: '<md-dialog aria-label="List dialog">' +
                '  <md-content data-ng-if="!horaires"> Aucun horaire disponible</md-content>' +
                '  <md-content data-ng-if="horaires"> Les horaires de votre film :' +
                '    <md-list>' +
                '      <md-item ng-repeat="horaire in horaires">' +
                '       <p>{{horaire.horaire}}</p>' +
                '      </md-item>' +
                '    </md-list>' +
                '  </md-content>' +
                '  <div class="md-actions">' +
                '    <md-button ng-click="closeDialog()">' +
                '      Fermer' +
                '    </md-button>' +
                '  </div>' +
                '</md-dialog>',
                locals: {
                    film: film
                },
                controller: DialogController
            });
            function DialogController(scope, $mdDialog,CinemaService, film ) {

                scope.horaires = [];

                CinemaService.getFilmHoraireFromCinema(film.id_film,film.id_cinema).success(function(data) {
                    scope.horaires = data;
                    if(data.length === 0)scope.horaires=null;
                });

                scope.closeDialog = function () {
                    $mdDialog.hide();
                }
            }
        };




    }]);