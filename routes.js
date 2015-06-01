/**
 * Module dependencies.
 */
var site = require('./controllers/home'); // default index.js
var testdata = require('./controllers/home/data'); //test data

var report = require('./controllers/report');
// more controllers define here.
// ...

module.exports = function(app) {
    // home
    app.get('/', site.index);
    // mock json req data
    app.get('/home/combotree.json', testdata.combotree);
    app.post('/home/datagrid', testdata.datagrid);
    // tabs
    // 首页
    //app.get('/report/start', report.start);
    // day
    //app.get('/report/day', report.day);

    // 404 page warn: must in the last
    app.get('*', function(req, res) {
        res.render('home/404', {
        });
    });

};