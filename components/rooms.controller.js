(function () {
    'use strict';

    angular
        .module('node')
        .controller('RoomsController', RoomsController);

    RoomsController.$inject = ['webservice', 'fileservice'];

    function RoomsController(webservice, fileservice) {
        var vm = this;

        console.log('Rooms Controller');

        vm.createR1Graph = createR1Graph;
        vm.createR2Graph = createR2Graph;
        vm.createR3Graph = createR3Graph;
        vm.createOGraph = createOGraph;
        vm.createNGraph = createNGraph;
        vm.createCOGraph = createCOGraph;
        vm.createCMGraph = createCMGraph;
        vm.createVCGraph = createVCGraph;
        vm.createTGraph = createTGraph;
        vm.createHGraph = createHGraph;

        function createR1Graph() {
            var data = [{
                z: [[null, null, null, 12, 13, 14, 15, null],
                    [3, 1, 4, 11, null, null, 4, 17],
                    [null, 2, null, 7, null, null, null, 18],
                    [null, 3, null, 8, 1, null, null, 19],
                    [5, 4, 10, 9, null, null, 8, 20],
                    [5, null, null, 27, null, null, null, 21],
                    [null, 6, null, 26, 25, 24, 23, 22]],
                zsmooth: 'best',
                type: 'heatmap',
                showscale: false,
                connectgaps: true,
            }];
            var layout = {
                title: 'Variation',
                height: '100%',
                width: '100%',
                xaxis: {
                    autorange: true,
                    showgrid: false,
                    zeroline: false,
                    showline: false,
                    autotick: true,
                    ticks: '',
                    showticklabels: false
                },
                yaxis: {
                    autorange: true,
                    showgrid: false,
                    zeroline: false,
                    showline: false,
                    autotick: true,
                    ticks: '',
                    showticklabels: false
                }
            };
            Plotly.newPlot('room-graph', data, layout);
        }

        function createR2Graph() {
            var data = [{
                z: [[null, null, null, 12, 13, 14, 15, 16],
                    [null, 1, null, 11, null, null, null, 17],
                    [null, 2, 6, 7, null, null, null, 18],
                    [null, 3, null, 8, null, null, null, 19],
                    [5, 4, 10, 9, null, null, null, 20],
                    [null, null, null, 27, null, null, null, 21],
                    [null, null, null, 26, 25, 24, 23, 22]],
                zsmooth: 'best',
                type: 'heatmap',
                showscale: false,
                connectgaps: true,
            }];
            var layout = {
                title: 'Variation',
                height: '100%',
                width: '100%',
                xaxis: {
                    autorange: true,
                    showgrid: false,
                    zeroline: false,
                    showline: false,
                    autotick: true,
                    ticks: '',
                    showticklabels: false
                },
                yaxis: {
                    autorange: true,
                    showgrid: false,
                    zeroline: false,
                    showline: false,
                    autotick: true,
                    ticks: '',
                    showticklabels: false
                }
            };
            Plotly.newPlot('room-graph', data, layout);
        }

        function createR3Graph() {
            var data = [{
                z: [[null, null, null, 12, 13, 14, 15, 16],
                    [null, 1, null, 11, null, 12, null, 17],
                    [null, 2, 6, 7, null, null, 8, 18],
                    [null, 3, null, 8, null, 7, null, 19],
                    [5, 4, null, 9, null, 12, null, 20],
                    [null, null, null, 27, null, 2, null, 21],
                    [null, null, null, 26, 25, null, 23, 22]],
                zsmooth: 'best',
                type: 'heatmap',
                showscale: false,
                connectgaps: true,
            }];
            var layout = {
                title: 'Variation',
                height: '100%',
                width: '100%',
                xaxis: {
                    autorange: true,
                    showgrid: false,
                    zeroline: false,
                    showline: false,
                    autotick: true,
                    ticks: '',
                    showticklabels: false
                },
                yaxis: {
                    autorange: true,
                    showgrid: false,
                    zeroline: false,
                    showline: false,
                    autotick: true,
                    ticks: '',
                    showticklabels: false
                }
            };
            Plotly.newPlot('room-graph', data, layout);
        }

        function createOGraph() {
            var data = [{
                z: [[null, null, null, null, null, 14, 15, 16],
                    [null, 1, null, 11, null, null, null, 17],
                    [null, 2, null, 7, null, null, null, 18],
                    [null, 3, null, 8, null, 23, null, 19],
                    [5, 4, 10, 9, null, null, 12, 20],
                    [null, 5, 4, 27, null, 4, null, 21],
                    [null, 4, 5, 26, null, 24, 23, 22]],
                zsmooth: 'best',
                type: 'heatmap',
                showscale: false,
                connectgaps: true,
            }];
            var layout = {
                title: 'Variation',
                height: '100%',
                width: '100%',
                xaxis: {
                    autorange: true,
                    showgrid: false,
                    zeroline: false,
                    showline: false,
                    autotick: true,
                    ticks: '',
                    showticklabels: false
                },
                yaxis: {
                    autorange: true,
                    showgrid: false,
                    zeroline: false,
                    showline: false,
                    autotick: true,
                    ticks: '',
                    showticklabels: false
                }
            };
            Plotly.newPlot('room-graph', data, layout);
        }

        function createNGraph() {
            var data = [{
                z: [[5, null, null, 12, 13, 14, 15, 16],
                    [null, 1, 4, 11, 3, null, null, 17],
                    [null, 2, 6, null, null, null, null, 18],
                    [null, 3, null, 8, null, null, null, 19],
                    [5, 4, null, null, null, null, 23, 20],
                    [null, null, null, 27, null, 23, 34, 21],
                    [null, null, null, 26, 25, 24, null, null]],
                zsmooth: 'best',
                type: 'heatmap',
                showscale: false,
                connectgaps: true,
            }];
            var layout = {
                title: 'Variation',
                height: '100%',
                width: '100%',
                xaxis: {
                    autorange: true,
                    showgrid: false,
                    zeroline: false,
                    showline: false,
                    autotick: true,
                    ticks: '',
                    showticklabels: false
                },
                yaxis: {
                    autorange: true,
                    showgrid: false,
                    zeroline: false,
                    showline: false,
                    autotick: true,
                    ticks: '',
                    showticklabels: false
                }
            };
            Plotly.newPlot('room-graph', data, layout);
        }

        function createTGraph() {
            var data = [{
                z: [[5, null, null, 12, 13, 14, 15, 16],
                    [null, 1, 4, 11, 3, null, null, 17],
                    [null, 2, 6, null, null, null, null, 18],
                    [null, 3, null, 8, null, null, null, 19],
                    [5, 4, null, null, null, null, 23, 20],
                    [null, null, null, 27, null, 23, 34, 21],
                    [null, null, null, 26, 25, 24, null, null]],
                zsmooth: 'best',
                type: 'heatmap',
                showscale: false,
                connectgaps: true,
            }];
            var layout = {
                title: 'Variation',
                height: '100%',
                width: '100%',
                xaxis: {
                    autorange: true,
                    showgrid: false,
                    zeroline: false,
                    showline: false,
                    autotick: true,
                    ticks: '',
                    showticklabels: false
                },
                yaxis: {
                    autorange: true,
                    showgrid: false,
                    zeroline: false,
                    showline: false,
                    autotick: true,
                    ticks: '',
                    showticklabels: false
                }
            };
            Plotly.newPlot('room-graph', data, layout);
        }

        function createCOGraph() {
            var data = [{
                z: [[null, null, null, 12, 13, 14, null, null],
                    [null, 1, null, 11, null, null, null, 17],
                    [null, 2, 6, 7, null, null, null, 18],
                    [null, 3, null, 8, null, 23, null, 19],
                    [5, 4, 10, 9, null, null, null, 20],
                    [null, 45, 45, 27, null, 34, null, 21],
                    [null, null, null, 26, 25, 24, 23, 22]],
                zsmooth: 'best',
                type: 'heatmap',
                showscale: false,
                connectgaps: true,
            }];
            var layout = {
                title: 'Variation',
                height: '100%',
                width: '100%',
                xaxis: {
                    autorange: true,
                    showgrid: false,
                    zeroline: false,
                    showline: false,
                    autotick: true,
                    ticks: '',
                    showticklabels: false
                },
                yaxis: {
                    autorange: true,
                    showgrid: false,
                    zeroline: false,
                    showline: false,
                    autotick: true,
                    ticks: '',
                    showticklabels: false
                }
            };
            Plotly.newPlot('room-graph', data, layout);
        }

        function createCMGraph() {
            var data = [{
                z: [[null, null, null, null, null, 14, 15, 16],
                    [null, 1, null, 11, null, null, null, 17],
                    [null, 2, null, 7, null, null, null, 18],
                    [null, 3, null, 8, null, 23, null, 19],
                    [5, 4, 10, 9, null, null, 12, 20],
                    [null, 5, 4, 27, null, 4, null, 21],
                    [null, 4, 5, 26, null, 24, 23, 22]],
                zsmooth: 'best',
                type: 'heatmap',
                showscale: false,
                connectgaps: true,
            }];
            var layout = {
                title: 'Variation',
                height: '100%',
                width: '100%',
                xaxis: {
                    autorange: true,
                    showgrid: false,
                    zeroline: false,
                    showline: false,
                    autotick: true,
                    ticks: '',
                    showticklabels: false
                },
                yaxis: {
                    autorange: true,
                    showgrid: false,
                    zeroline: false,
                    showline: false,
                    autotick: true,
                    ticks: '',
                    showticklabels: false
                }
            };
            Plotly.newPlot('room-graph', data, layout);
        }



        function createVCGraph() {
            var data = [{
                z: [[null, null, null, 12, 13, 14, null, null],
                    [null, 1, null, 11, null, null, null, 17],
                    [null, 2, 6, 7, null, null, null, 18],
                    [null, 3, null, 8, null, 23, null, 19],
                    [5, 4, 10, 9, null, null, null, 20],
                    [null, 45, 45, 27, null, 34, null, 21],
                    [null, null, null, 26, 25, 24, 23, 22]],
                zsmooth: 'best',
                type: 'heatmap',
                showscale: false,
                connectgaps: true,
            }];
            var layout = {
                title: 'Variation',
                height: '100%',
                width: '100%',
                xaxis: {
                    autorange: true,
                    showgrid: false,
                    zeroline: false,
                    showline: false,
                    autotick: true,
                    ticks: '',
                    showticklabels: false
                },
                yaxis: {
                    autorange: true,
                    showgrid: false,
                    zeroline: false,
                    showline: false,
                    autotick: true,
                    ticks: '',
                    showticklabels: false
                }
            };
            Plotly.newPlot('room-graph', data, layout);
        }
    }
})();