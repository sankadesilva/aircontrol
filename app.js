(function () {
    'use strict';

    // Declare app level module which depends on views, and components
    angular
        .module('node', ['ngRoute', 'angularFileUpload'])

        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/rooms', {
                    templateUrl: 'components/rooms.html',
                    controller: 'RoomsController',
                    controllerAs: 'vm'
                })
                .when('/air', {
                    templateUrl: 'components/air.html',
                    controller: 'AirController',
                    controllerAs: 'vm'
                })

                // By default it will open /
                .otherwise({redirectTo: '/'});

            // $locationProvider.html5Mode(true);
        });
})();
