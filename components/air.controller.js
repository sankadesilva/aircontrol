(function () {
    'use strict';

    angular
        .module('node')
        .controller('AirController', AirController);

    AirController.$inject = ['webservice'];

    function AirController(webservice) {
        var vm = this;

        console.log("Air Controller");

        vm.createOGraph = createOGraph;
        vm.createNGraph = createNGraph;
        vm.createCOGraph = createCOGraph;
        vm.createVOCGraph = createVOCGraph;
        vm.createHUMGraph = createHUMGraph;
        vm.createTEMPGraph = createTEMPGraph;

        function createOGraph() {
            var trace2 = {
                x: [0, 1, 2, 3, 4],
                y: [2, 16, 11, 20, 9],
                mode: 'lines',
                name: 'Lines'
            };
            var data = [trace2];
            var layout = {
                title: 'Oxygen Variation',
                height: '100%',
                width: '100%',
                xaxis: {
                    tickvals: [0, 1, 2, 3, 4],
                    ticktext: ["9","9:30","10","10:30","11"],
                    title: 'time'
                },
                yaxis: {
                    title: 'percentage'
                }
            };
            Plotly.newPlot('air-graph', data, layout);
        }

        function createNGraph() {
            var trace2 = {
                x: [1, 2, 3, 4, 5],
                y: [1, 15, 3, 11, 9],
                mode: 'lines',
                name: 'Lines'
            };
            var data = [trace2];
            var layout = {
                title: 'Nitrogen Variation',
                height: '100%',
                width: '100%',
                xaxis: {
                    tickvals: [1, 2, 3, 4, 5],
                    ticktext: ["9","9:30","10","10:30","11"],
                    title: 'time'
                },
                yaxis: {
                    title: 'percentage'
                }
            };
            Plotly.newPlot('air-graph', data, layout);
        }

        function createCOGraph() {
            var trace2 = {
                x: [1, 2, 3, 4, 5],
                y: [6, 7, 5, 11, 9],
                mode: 'lines',
                name: 'Lines'
            };
            var data = [trace2];
            var layout = {
                title: 'CO2 Variation',
                height: '100%',
                width: '100%',
                xaxis: {
                    tickvals: [1, 2, 3, 4, 5],
                    ticktext: ["9","9:30","10","10:30","11"],
                    title: 'time'
                },
                yaxis: {
                    title: 'percentage'
                }
            };
            Plotly.newPlot('air-graph', data, layout);
        }

        function createVOCGraph() {
            var trace2 = {
                x: [1, 2, 3, 4, 5],
                y: [6, 7, 5, 11, 9],
                mode: 'lines',
                name: 'Lines'
            };
            var data = [trace2];
            var layout = {
                title: 'VOC Variation',
                height: '100%',
                width: '100%',
                xaxis: {
                    tickvals: [1, 2, 3, 4, 5],
                    ticktext: ["9","9:30","10","10:30","11"],
                    title: 'time'
                },
                yaxis: {
                    title: 'percentage'
                }
            };
            Plotly.newPlot('air-graph', data, layout);
        }

        function createHUMGraph() {
            var trace2 = {
                x: [1, 2, 3, 4, 5],
                y: [6, 7, 5, 11, 9],
                mode: 'lines',
                name: 'Lines'
            };
            var data = [trace2];
            var layout = {
                title: 'Humidity Variation',
                height: '100%',
                width: '100%',
                xaxis: {
                    tickvals: [1, 2, 3, 4, 5],
                    ticktext: ["9","9:30","10","10:30","11"],
                    title: 'time'
                },
                yaxis: {
                    title: 'percentage'
                }
            };
            Plotly.newPlot('air-graph', data, layout);
        }

        function createTEMPGraph() {
            var trace2 = {
                x: [1, 2, 3, 4, 5],
                y: [6, 7, 5, 11, 9],
                mode: 'lines',
                name: 'Lines'
            };
            var data = [trace2];
            var layout = {
                title: 'Temperature Variation',
                height: '100%',
                width: '100%',
                xaxis: {
                    tickvals: [1, 2, 3, 4, 5],
                    ticktext: ["9","9:30","10","10:30","11"],
                    title: 'time'
                },
                yaxis: {
                    title: 'percentage'
                }
            };
            Plotly.newPlot('air-graph', data, layout);
        }
    }
})();