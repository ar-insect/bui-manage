/**
 * Module dependencies.
 */
var site = require('./controllers/home'); // default index.js
var mockdata = require('./controllers/home/data'); //test data

var main = require('./controllers/main');
var form = require('./controllers/form');
var report = require('./controllers/report');
// more controllers define here.
// ...

module.exports = function(app) {
    // home
    app.get('/', site.index);
    // mock json req data
    app.get('/data/combotree.json', mockdata.combotree);
    app.post('/data/datagrid', mockdata.datagrid);
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

    // 404 page warn: must in the last
    app.get('*', function(req, res) {
        res.render('home/404', {
        });
    });

};