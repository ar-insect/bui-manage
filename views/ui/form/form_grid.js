BUI.use(['bui/grid', 'bui/data', 'bui/form'], function (Grid, Data, Form) {

    var columns = [{title: '学校名称', dataIndex: 'school', editor: {xtype: 'text', rules: {required: true}}},
            {
                title: '入学日期',
                dataIndex: 'enter',
                editor: {xtype: 'date', rules: {required: true}},
                renderer: Grid.Format.dateRenderer
            },//使用现有的渲染函数，日期格式化
            {
                title: '毕业日期', dataIndex: 'outter', editor: {
                xtype: 'date', rules: {required: true}, validator: function (value, obj) {
                    if (obj.enter && value && obj.enter > value) {
                        return '毕业日期不能晚于入学日期！'
                    }
                }
            }, renderer: Grid.Format.dateRenderer
            },
            {title: '备注', dataIndex: 'memo', width: 200, editor: {xtype: 'text'}}

        ],
    //默认的数据
        data = [{id: '1', school: '武汉第一初级中学', enter: 936144000000, outter: 993945600000, memo: '表现优异，多次评为三好学生'},
            {id: '2', school: '武汉第一高级中学', enter: 999561600000, outter: 1057017600000, memo: '表现优异，多次评为三好学生'}],
        store = new Data.Store({
            data: data
        }),
        editing = new Grid.Plugins.CellEditing(),
        grid = new Grid.Grid({
            render: '#grid',
            columns: columns,
            width: 700,
            forceFit: true,
            store: store,
            plugins: [Grid.Plugins.CheckSelection, editing],
            tbar: {
                items: [{
                    btnCls: 'button button-small',
                    text: '<i class="icon-plus"></i>添加',
                    listeners: {
                        'click': addFunction
                    }
                },
                    {
                        btnCls: 'button button-small',
                        text: '<i class="icon-remove"></i>删除',
                        listeners: {
                            'click': delFunction
                        }
                    }]
            }

        });
    grid.render();

    function addFunction() {
        var newData = {school: '请输入学校名称'};
        store.add(newData);
        editing.edit(newData, 'school'); //添加记录后，直接编辑
    }

    function delFunction() {
        var selections = grid.getSelection();
        store.remove(selections);
    }

    var form = new Form.HForm({
        srcNode: '#J_Form'
    });
    form.render();

    form.on('beforesubmit', function () {
        if (!editing.isValid()) {
            return false;
        }
    });


});