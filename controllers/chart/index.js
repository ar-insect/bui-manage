
exports.code = function(req, res) {
    res.render('chart/code', {
        hello: '这是mockdata数据。。。'
    });
};

exports.line = function(req, res) {
    res.render('chart/line', {
        hello: '这是mockdata数据。。。'
    });
};

exports.area = function(req, res) {
    res.render('chart/area', {
        hello: '这是mockdata数据。。。'
    });
};

exports.column = function(req, res) {
    res.render('chart/column', {
        hello: '这是mockdata数据。。。'
    });
};

exports.pie = function(req, res) {
    res.render('chart/pie', {
        hello: '这是mockdata数据。。。'
    });
};

exports.radar = function(req, res) {
    res.render('chart/radar', {
        hello: '这是mockdata数据。。。'
    });
};
