BUI.use(['frame/search', 'bui/overlay'], function (Search, Overlay) {

    var enumObj = {"1": "男", "0": "女"},
        columns = [
            {
                title: '学生编号', dataIndex: 'id', width: 80, renderer: function (v) {
                return Search.createLink({
                    id: 'detail' + v,
                    title: '学生信息',
                    text: v,
                    href: 'detail/example.html'
                });
            }
            },
            {title: '学生姓名', dataIndex: 'name', width: 100},
            {title: '生日', dataIndex: 'birthday', width: 100, renderer: BUI.Grid.Format.dateRenderer},
            {title: '学生性别', dataIndex: 'sex', width: 60, renderer: BUI.Grid.Format.enumRenderer(enumObj)},
            {title: '学生班级', dataIndex: 'grade', width: 100},
            {title: '学生家庭住址', dataIndex: 'address', width: 300},
            {
                title: '操作', dataIndex: '', width: 200, renderer: function (value, obj) {
                var editStr = Search.createLink({ //链接使用 此方式
                        id: 'edit' + obj.id,
                        title: '编辑学生信息',
                        text: '编辑',
                        href: 'search/edit.html'
                    }),
                    delStr = '<span class="grid-command btn-del" title="删除学生信息">删除</span>';//页面操作不需要使用Search.createLink
                return editStr + delStr;
            }
            }
        ],
        store = Search.createStore('../data/student.json'),
        gridCfg = Search.createGridCfg(columns, {
            tbar: {
                items: [
                    {
                        text: '<i class="icon-plus"></i>新建', btnCls: 'button button-small', handler: function () {
                        alert('新建');
                    }
                    },
                    {
                        text: '<i class="icon-edit"></i>编辑', btnCls: 'button button-small', handler: function () {
                        alert('编辑');
                    }
                    },
                    {text: '<i class="icon-remove"></i>删除', btnCls: 'button button-small', handler: delFunction}
                ]
            },
            plugins: [BUI.Grid.Plugins.CheckSelection] // 插件形式引入多选表格
        });

    var search = new Search({
            store: store,
            gridCfg: gridCfg
        }),
        grid = search.get('grid');
    //删除操作
    function delFunction() {
        var selections = grid.getSelection();
        delItems(selections);
    }

    function delItems(items) {
        var ids = [];
        BUI.each(items, function (item) {
            ids.push(item.id);
        });

        if (ids.length) {
            BUI.Message.Confirm('确认要删除选中的记录么？', function () {
                $.ajax({
                    url: '../data/del.php',
                    dataType: 'json',
                    data: {ids: ids},
                    success: function (data) {
                        if (data.success) { //删除成功
                            search.load();
                        } else { //删除失败
                            BUI.Message.Alert('删除失败！');
                        }
                    }
                });
            }, 'question');
        }
    }

    //监听事件，删除一条记录
    grid.on('cellclick', function (ev) {
        var sender = $(ev.domTarget); //点击的Dom
        if (sender.hasClass('btn-del')) {
            var record = ev.record;
            delItems([record]);
        }
    });
});