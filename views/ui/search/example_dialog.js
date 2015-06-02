BUI.use('frame/search', function (Search) {

    var enumObj = {"1": "男", "0": "女"},
        editing = new BUI.Grid.Plugins.DialogEditing({
            contentId: 'content', //设置隐藏的Dialog内容
            autoSave: true, //添加数据或者修改数据时，自动保存
            triggerCls: 'btn-edit'
        }),
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
                        text: '打开编辑',
                        href: 'form/example.html'
                    }),
                    editStr1 = '<span class="grid-command btn-edit" title="编辑学生信息">弹出编辑</span>',
                    delStr = '<span class="grid-command btn-del" title="删除学生信息">删除</span>';//页面操作不需要使用Search.createLink
                return editStr + editStr1 + delStr;
            }
            }
        ],
        store = Search.createStore('../data/student.json', {
            proxy: {
                save: { //也可以是一个字符串，那么增删改，都会往那么路径提交数据，同时附加参数saveType
                    addUrl: '../data/add.json',
                    updateUrl: '../data/edit.json',
                    removeUrl: '../data/del.php'
                }/*,
                 method : 'POST'*/
            },
            autoSync: true //保存数据后，自动更新
        }),
        gridCfg = Search.createGridCfg(columns, {
            tbar: {
                items: [
                    {text: '<i class="icon-plus"></i>新建', btnCls: 'button button-small', handler: addFunction},
                    {
                        text: '<i class="icon-edit"></i>编辑', btnCls: 'button button-small', handler: function () {
                        alert('编辑');
                    }
                    },
                    {text: '<i class="icon-remove"></i>删除', btnCls: 'button button-small', handler: delFunction}
                ]
            },
            plugins: [editing, BUI.Grid.Plugins.CheckSelection, BUI.Grid.Plugins.AutoFit] // 插件形式引入多选表格
        });

    var search = new Search({
            store: store,
            gridCfg: gridCfg
        }),
        grid = search.get('grid');

    function addFunction() {
        var newData = {isNew: true}; //标志是新增加的记录
        editing.add(newData, 'name'); //添加记录后，直接编辑
    }

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
                store.save('remove', {ids: ids});
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