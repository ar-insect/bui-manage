BUI.use('bui/chart', function (Chart) {

    var chart = new Chart.Chart({
        render: '#canvas',
        width: 950,
        height: 500,
        title: {
            text: '浏览器分布图'
        },
        legend: null,//不显示图例
        seriesOptions: { //设置多个序列共同的属性
            pieCfg: {
                allowPointSelect: true,
                labels: {
                    distance: 40,
                    label: {
                        //文本信息可以在此配置
                    },
                    renderer: function (value, item) { //格式化文本
                        return value + ' ' + (item.point.percent * 100).toFixed(2) + '%';
                    }
                }
            }
        },
        tooltip: {
            pointRenderer: function (point) {
                return (point.percent * 100).toFixed(2) + '%';
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Firefox', 45.0],
                ['IE', 26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari', 8.5],
                ['Opera', 6.2],
                ['Others', 0.7]
            ]
        }]
    });

    chart.render();
});