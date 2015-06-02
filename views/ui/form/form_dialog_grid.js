BUI.use(['bui/grid', 'bui/data', 'bui/form'], function (Grid, Data, Form) {

    var columns = [{title: '学校名称', dataIndex: 'school'},
            {title: '入学日期', dataIndex: 'enter'},
            {title: '毕业日期', dataIndex: 'outter'},
            {title: '备注', dataIndex: 'memo', width: 200},
            {
                title: '操作', renderer: function () {
                return '<span class="grid-command btn-edit">编辑</span>';
            }
            }
        ],
    //默认的数据
        data = [
            {
                id: '1',
                school: '武汉第一初级中学',
                enter: '1999-09-01',
                type: 'zou',
                outter: '2002-07-01',
                memo: '表现优异，多次评为三好学生'
            },
            {id: '2', school: '武汉第一高级中学', enter: '2002-09-01', type: 'zou', outter: '2005-07-01', memo: '表现优异，多次评为三好学生'}
        ],
        store = new Data.Store({
            data: data
        }),
        editing = new Grid.Plugins.DialogEditing({
            contentId: 'content',
            triggerCls: 'btn-edit',
            eidtor: {
                focusable: false
            }
        }),
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
        editing.add(newData); //添加记录后，直接编辑
    }

    function delFunction() {
        var selections = grid.getSelection();
        store.remove(selections);
    }

    var form = new Form.HForm({
        srcNode: '#J_Form'
    });
    form.render();
    var field = form.getField('eduation');
    form.on('beforesubmit', function () {
        var records = store.getResult();
        field.set('value', BUI.JSON.stringify(records));
    });
});