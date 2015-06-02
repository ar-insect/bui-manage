BUI.use('bui/form', function (Form) {
    Form.Rules.add({
        name: 'sid',
        msg: '请填写{0}数字的学生编号。',
        validator: function (value, baseValue, formatMsg) {
            var regexp = new RegExp('^\\d{' + baseValue + '}$');
            if (value && !regexp.test(value)) {
                return formatMsg;
            }
        }
    });
    new Form.Form({
        srcNode: '#J_Form'
    }).render();

    new Form.HForm({
        srcNode: '#J_Form1'
    }).render();

    new Form.Form({
        srcNode: '#J_Form2',
        validators: {
            'studentId': function (value) {
                if (!value) {
                    return '学生编号不能为空';
                }
                if (!/^$\d{5}$/.test(value)) {
                    return '学生编号为5位数字';
                }
            }
        }
    }).render();

    new Form.Form({
        srcNode: '#J_Form3',
        //联合校验起始日期
        validators: {
            '#group': function (record) {
                if (record.start > record.end) {
                    return '结束日期必须大于起始日期！';
                }
            }
        }
    }).render();
});