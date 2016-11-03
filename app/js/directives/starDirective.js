var app = angular.module('app', []);

app.directive('etoiles', function() {

    return function(scope, element, attr) {

        scope.$watch(attr.etoiles, function (value) {
            var html = '';
            for (var i = 0 ; i < value ; i++) {
                html += '<img src="star.png"/>';
            }
            element.html(html);
        });

    };

});