/**
 * Created by Buddhi on 3/15/2017.
 */

(function () {
    'use strict';

    angular.module('node')
        .service('fileservice', fileservice);

    fileservice.$inject = [];

    function fileservice() {
        var files = [];
        return files;
    }
})();

