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
        vm.createCMGraph = createCMGraph;
        vm.createVCGraph = createVCGraph;
        vm.createTGraph = createTGraph;
        vm.createHGraph = createHGraph;

        createOGraph();

        // var client = WindowsAzure.MobileServiceClient('866f66d6-ee26-4472-8c17-767eefb4fc51');
        // console.log(client);

        // var fileUri = 'https://gaslevels.file.core.windows.net';
        // var fileService = AzureStorage.createFileServiceWithSas(fileUri, '?sv=2017-04-17&ss=bfqt&srt=sco&sp=rwdlacup&se=2018-01-10T06:21:01Z&st=2018-01-09T22:21:01Z&spr=https&sig=orlhKq%2FqA1KMUwt9dPOTMa8Qop2GqoAoPUgL%2FjSq5BE%3D');

        // var blobService = AzureStorage.createBlobService();
        // console.log(fileService);

        // var azure = require('azure-storage');
        // var blobSvc = azure.createBlobService();

        // console.log(blobSvc);

        function createOGraph() {
            var xValues = [];
            var yValues = [];
            for (var i = 0; i < 24; i++) {
                xValues.push(i);
                xValues.push(i + 0.50);
            }
            for (var i = 0; i < 48; i++) {
                var y = Math.floor(Math.random() * 100);
                y = (y % 10) + 20;
                yValues.push(y);
            }

            var trace2 = {
                x: xValues,
                y: yValues,
                mode: 'lines',
                name: 'Lines'
            };
            var data = [trace2];
            var layout = {
                autosize: false,
                title: 'Oxygen Variation',
                height: '500',
                width: '1000',
                xaxis: {
                    title: 'Time(hours)'
                },
                yaxis: {
                    title: 'Percentage(%)'
                }
            };
            Plotly.newPlot('air-graph', data, layout);
        }

        function createNGraph() {
            var xValues = [];
            var yValues = [];
            for (var i = 0; i < 24; i++) {
                xValues.push(i);
                xValues.push(i + 0.50);
            }
            for (var i = 0; i < 48; i++) {
                var y = Math.floor(Math.random() * 100);
                y = (y % 10) + 70;
                yValues.push(y);
            }

            var trace2 = {
                x: xValues,
                y: yValues,
                mode: 'lines',
                name: 'Lines'
            };
            var data = [trace2];
            var layout = {
                title: 'Nitrogen Variation',
                height: '500',
                width: '1000',
                xaxis: {
                    title: 'Time(hours)'
                },
                yaxis: {
                    title: 'Percentage(%)'
                }
            };
            Plotly.newPlot('air-graph', data, layout);
        }

        function createCOGraph() {
            var xValues = [];
            var yValues = [];
            for (var i = 0; i < 24; i++) {
                xValues.push(i);
                xValues.push(i + 0.50);
            }
            for (var i = 0; i < 48; i++) {
                var y = Math.floor(Math.random() * 100);
                y = (y % 10) * 0.05;
                yValues.push(y);
            }

            var trace2 = {
                x: xValues,
                y: yValues,
                mode: 'lines',
                name: 'Lines'
            };
            var data = [trace2];
            var layout = {
                title: 'CO2 Variation',
                height: '500',
                width: '1000',
                xaxis: {
                    title: 'Time(hours)'
                },
                yaxis: {
                    title: 'Percentage(%)'
                }
            };
            Plotly.newPlot('air-graph', data, layout);
        }

        function createCMGraph() {
            var xValues = [];
            var yValues = [];
            for (var i = 0; i < 24; i++) {
                xValues.push(i);
                xValues.push(i + 0.50);
            }
            for (var i = 0; i < 48; i++) {
                var y = Math.floor(Math.random() * 100);
                y = (y % 10) * 0.05;
                yValues.push(y);
            }

            var trace2 = {
                x: xValues,
                y: yValues,
                mode: 'lines',
                name: 'Lines'
            };
            var data = [trace2];
            var layout = {
                title: 'Carbon Monoxide Variation',
                height: '500',
                width: '1000',
                xaxis: {
                    title: 'Time(hours)'
                },
                yaxis: {
                    title: 'Percentage(%)'
                }
            };
            Plotly.newPlot('air-graph', data, layout);
        }

        function createVCGraph() {
            var xValues = [];
            var yValues = [];
            for (var i = 0; i < 24; i++) {
                xValues.push(i);
                xValues.push(i + 0.50);
            }
            for (var i = 0; i < 48; i++) {
                var y = Math.floor(Math.random() * 100);
                y = (y % 10) * 0.05;
                yValues.push(y);
            }

            var trace2 = {
                x: xValues,
                y: yValues,
                mode: 'lines',
                name: 'Lines'
            };
            var data = [trace2];
            var layout = {
                title: 'Volatile Compounds Variation',
                height: '500',
                width: '1000',
                xaxis: {
                    title: 'Time(hours)'
                },
                yaxis: {
                    title: 'Percentage(%)'
                }
            };
            Plotly.newPlot('air-graph', data, layout);
        }

        function createTGraph() {
            var xValues = [];
            var yValues = [];
            for (var i = 0; i < 24; i++) {
                xValues.push(i);
                xValues.push(i + 0.50);
            }
            for (var i = 0; i < 48; i++) {
                var y = Math.floor(Math.random() * 100);
                y = (y % 10) + 25;
                yValues.push(y);
            }

            var trace2 = {
                x: xValues,
                y: yValues,
                mode: 'lines',
                name: 'Lines'
            };
            var data = [trace2];
            var layout = {
                title: 'Temperature Variation',
                height: '500',
                width: '1000',
                xaxis: {
                    title: 'Time(hours)'
                },
                yaxis: {
                    title: 'Degrees'
                }
            };
            Plotly.newPlot('air-graph', data, layout);
        }

        function createHGraph() {
            var xValues = [];
            var yValues = [];
            for (var i = 0; i < 24; i++) {
                xValues.push(i);
                xValues.push(i + 0.50);
            }
            for (var i = 0; i < 48; i++) {
                var y = Math.floor(Math.random() * 100);
                y = (y % 10) + 35;
                yValues.push(y);
            }

            var trace2 = {
                x: xValues,
                y: yValues,
                mode: 'lines',
                name: 'Lines'
            };
            var data = [trace2];
            var layout = {
                title: 'Humidity Variation',
                height: '500',
                width: '1000',
                xaxis: {
                    title: 'Time(hours)'
                },
                yaxis: {
                    title: 'percentage(%)'
                }
            };
            Plotly.newPlot('air-graph', data, layout);
        }
    }
})();