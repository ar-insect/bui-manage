/**
 * Module dependencies.
 */
var site = require('./controllers/home'); // default index.js
var mockdata = require('./controllers/home/data'); //test data

var main = require('./controllers/main');
var report = require('./controllers/report');
// more controllers define here.
// ...

module.exports = function(app) {
    // home
    app.get('/', site.index);
    // mock json req data
    app.get('/data/combotree.json', mockdata.combotree);
    app.post('/data/datagrid', mockdata.datagrid);
    // page
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



    // 404 page warn: must in the last
    app.get('*', function(req, res) {
        res.render('home/404', {
        });
    });

};