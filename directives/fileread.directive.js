(function () {
    'use strict';

    angular.module("node")
        .directive('fileRead', ['$parse', 'fileservice', function ($parse, fileservice) {
            return {
                restrict: 'A',
                link: function (scope, element) {
                    element.bind('change', function () {
                        scope.$apply(function () {
                            if (element[0].files != undefined) {
                                fileservice.push(element[0].files[0]);
                                console.log('directive applying with file');
                            }
                        });
                    });
                }
            };
        }])
})();