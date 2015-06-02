/**
 * Module dependencies.
 */
var site = require('./controllers/home'); // default index.js
var formSearch = require('./controllers/data/form_search'); //test data

var main = require('./controllers/main');
var form = require('./controllers/form');
var search = require('./controllers/search');
var detail = require('./controllers/detail');
var chart = require('./controllers/chart');
// more controllers define here.
// ...

module.exports = function(app) {
    // home
    app.get('/', site.index);
    // mock json req data
    app.get('/data/formSearch/del.json', formSearch.del);
    app.get('/data/formSearch/student.json', formSearch.student);
    // main
    // 首页代码
    app.get('/main/code.html', main.code);
    // 顶部导航
    app.get('/main/menu.html', main.menu);
    // 右边菜单
    app.get('/main/second-menu.html', main.second_menu);
    // 动态菜单
    app.get('/main/dyna-menu.html', main.dyna_menu);
    // 页面常见操作
    app.get('/main/operation.html', main.operation);
    // 页面操作快捷方式
    app.get('/main/quick.html', main.quick);
    // 资源文件结构
    app.get('/main/resource.html', main.resource);
    // 引入JS方式
    app.get('/main/loader.html', main.loader);
    // form
    // 表单代码
    app.get('/form/code.html', form.code);
    // 表单示例
    app.get('/form/example.html', form.example);
    // 表单简介
    app.get('/form/introduce.html', form.introduce);
    // 表单基本验证
    app.get('/form/basicValid.html', form.basic_valid);
    // 表单复杂验证
    app.get('/form/advalid.html', form.advalid);
    // 远程调用
    app.get('/form/remote.html', form.remote);
    // 表单分组
    app.get('/form/group.html', form.group);
    // 表单联动
    app.get('/form/depends.html', form.depends);
    // 成功页面
    app.get('/form/success.html', form.success);
    // 失败页面
    app.get('/form/fail.html', form.fail);
    // 可编辑表格
    app.get('/form/grid.html', form.grid);
    // 表单中的可编辑表格
    app.get('/form/form-grid.html', form.form_grid);
    // 使用弹出框
    app.get('/form/dialog-grid.html', form.dialog_grid);
    // 表单中使用弹出框
    app.get('/form/form-dialog-grid.html', form.form_dialog_grid);
    // 搜索页
    // 搜索页面代码
    app.get('/search/code.html', search.code);
    // 搜索页面示例
    app.get('/search/example.html', search.example);
    // 编辑
    app.get('/search/edit.html', search.edit);
    // 搜索页面编辑示例
    app.get('/search/example-dialog.html', search.example_dialog);
    // 搜索页面简介
    app.get('/search/introduce.html', search.introduce);
    // 搜索配置
    app.get('/search/config.html', search.config);
    // 使用tab过滤
    app.get('/search/tab.html', search.tab);
    //详情页面
    // 详情页面代码
    app.get('/detail/code.html', detail.code);
    // 详情页面示例
    app.get('/detail/example.html', detail.example);
    // 详情页面简介
    app.get('/detail/introduce.html', detail.introduce);
    // 图表
    // 引入代码
    app.get('/chart/code.html', chart.code);
    // 折线图
    app.get('/chart/line.html', chart.line);
    // 区域图
    app.get('/chart/area.html', chart.area);
    // 柱状图
    app.get('/chart/column.html', chart.column);
    // 饼图
    app.get('/chart/pie.html', chart.pie);
    // 雷达图
    app.get('/chart/radar.html', chart.radar);

    // 404 page warn: must in the last
    app.get('*', function(req, res) {
        res.render('home/404', {
        });
    });

};