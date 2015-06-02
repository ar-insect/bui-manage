BUI.use('bui/chart', function (Chart) {

    var chart = new Chart.Chart({
        render: '#canvas',
        width: 950,
        height: 500,
        plotCfg: {
            margin: [50, 50, 100]

        },
        title: {
            text: '折线雷达图',
            'font-size': '16px'
        },
        subTitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            type: 'circle',
            tickInterval: 45
        },
        yAxis: {
            title: null,
            type: 'radius',
            grid: {
                type: 'circle' //圆形栅格，可以改成polygon
            },
            labels: {
                label: {
                    x: -12
                }
            },
            min: 0
        },

        series: [
            {
                name: 'line1',
                type: 'line',
                data: [8, 7, 6, 5, 4, 3, 2, 1]
            },
            {
                type: 'line',
                name: 'Line2',
                data: [1, 2, 3, 4, 5, 6, 7, 8]
            }, {
                type: 'line',
                name: 'line3',
                data: [1, 8, 2, 7, 3, 6, 4, 5]
            }
        ]
    });

    chart.render();
});