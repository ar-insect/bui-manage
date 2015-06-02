
exports.code = function(req, res) {
    res.render('detail/code', {
        hello: '这是mockdata数据。。。'
    });
};

exports.example = function(req, res) {
    res.render('detail/example', {
        hello: '这是mockdata数据。。。'
    });
};

exports.introduce = function(req, res) {
    res.render('detail/introduce', {
        hello: '这是mockdata数据。。。'
    });
};
