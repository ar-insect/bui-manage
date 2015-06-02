BUI.use('bui/grid', function (Grid) {
    var data = [{id: '1112', name: '李四', day: 1349622209547, address: '上海市浦东新区杨高北路938号'}, {
            id: '1112',
            name: '李四',
            day: 1349622209547,
            address: '上海市浦东新区杨高北路938号'
        }, {id: '1112', name: '李四', day: 1349622209547, address: '上海市浦东新区杨高北路938号'}, {
            id: '1112',
            name: '李四',
            day: 1349622209547,
            address: '上海市浦东新区杨高北路938号'
        }],

        grid = new Grid.SimpleGrid({
            render: '#grid', //显示Grid到此处
            width: 950,      //设置宽度
            columns: [
                {title: '学生编号', dataIndex: 'id', width: 80},
                {title: '学生姓名', dataIndex: 'name', width: 100},
                {title: '入学时间', dataIndex: 'day', width: 100, renderer: Grid.Format.dateRenderer},
                {title: '学生家庭住址', dataIndex: 'address', width: 300}
            ]
        });
    grid.render();
    grid.showData(data);
});