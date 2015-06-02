BUI.use('frame/main', function () {
    var config = [{
        id: 'menu',
        homePage: 'code',
        menu: [{
            text: '首页内容',
            items: [
                {id: 'code', text: '首页代码', href: 'main/code.html', closeable: false},
                {id: 'main-menu', text: '顶部导航', href: 'main/menu.html'},
                {id: 'second-menu', text: '右边菜单', href: 'main/second-menu.html'},
                {id: 'dyna-menu', text: '动态菜单', href: 'main/dyna-menu.html'}
            ]
        }, {
            text: '页面操作',
            items: [
                {id: 'operation', text: '页面常见操作', href: 'main/operation.html'},
                {id: 'quick', text: '页面操作快捷方式', href: 'main/quick.html'}
            ]
        }, {
            text: '文件结构',
            items: [
                {id: 'resource', text: '资源文件结构', href: 'main/resource.html'},
                {id: 'loader', text: '引入JS方式', href: 'main/loader.html'}
            ]
        }]
    }, {
        id: 'form',
        menu: [{
            text: '表单页面',
            items: [
                {id: 'code', text: '表单代码', href: 'form/code.html'},
                {id: 'example', text: '表单示例', href: 'form/example.html'},
                {id: 'introduce', text: '表单简介', href: 'form/introduce.html'},
                {id: 'valid', text: '表单基本验证', href: 'form/basicValid.html'},
                {id: 'advalid', text: '表单复杂验证', href: 'form/advalid.html'},
                {id: 'remote', text: '远程调用', href: 'form/remote.html'},
                {id: 'group', text: '表单分组', href: 'form/group.html'},
                {id: 'depends', text: '表单联动', href: 'form/depends.html'}
            ]
        }, {
            text: '成功失败页面',
            items: [
                {id: 'success', text: '成功页面', href: 'form/success.html'},
                {id: 'fail', text: '失败页面', href: 'form/fail.html'}

            ]
        }, {
            text: '可编辑表格',
            items: [
                {id: 'grid', text: '可编辑表格', href: 'form/grid.html'},
                {id: 'form-grid', text: '表单中的可编辑表格', href: 'form/form-grid.html'},
                {id: 'dialog-grid', text: '使用弹出框', href: 'form/dialog-grid.html'},
                {id: 'form-dialog-grid', text: '表单中使用弹出框', href: 'form/form-dialog-grid.html'}
            ]
        }]
    }, {
        id: 'search',
        menu: [{
            text: '搜索页面',
            items: [
                {id: 'code', text: '搜索页面代码', href: 'search/code.html'},
                {id: 'example', text: '搜索页面示例', href: 'search/example.html'},
                {id: 'example-dialog', text: '搜索页面编辑示例', href: 'search/example-dialog.html'},
                {id: 'introduce', text: '搜索页面简介', href: 'search/introduce.html'},
                {id: 'config', text: '搜索配置', href: 'search/config.html'}
            ]
        }, {
            text: '更多示例',
            items: [
                {id: 'tab', text: '使用tab过滤', href: 'search/tab.html'}
            ]
        }]
    }, {
        id: 'detail',
        menu: [{
            text: '详情页面',
            items: [
                {id: 'code', text: '详情页面代码', href: 'detail/code.html'},
                {id: 'example', text: '详情页面示例', href: 'detail/example.html'},
                {id: 'introduce', text: '详情页面简介', href: 'detail/introduce.html'}
            ]
        }]
    }, {
        id: 'chart',
        menu: [{
            text: '图表',
            items: [
                {id: 'code', text: '引入代码', href: 'chart/code.html'},
                {id: 'line', text: '折线图', href: 'chart/line.html'},
                {id: 'area', text: '区域图', href: 'chart/area.html'},
                {id: 'column', text: '柱状图', href: 'chart/column.html'},
                {id: 'pie', text: '饼图', href: 'chart/pie.html'},
                {id: 'radar', text: '雷达图', href: 'chart/radar.html'}
            ]
        }]
    }];
    new PageUtil.MainPage({
        modulesConfig: config
    });
});