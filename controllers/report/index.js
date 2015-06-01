
exports.day = function(req, res) {
    res.render('report/day', {
        hello: '这是mockdata数据。。。'
    });
};

exports.start = function(req, res) {
    res.render('report/start', {
        hello: '这是起始页面、、、'
    });
};
