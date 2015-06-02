//引入表单模块
BUI.use('bui/form', function (Form) {
    //使用水平布局表单(horizontal form)
    var form = new Form.Form({
        srcNode: '#J_Form'
    });

    form.render();

    var form1 = new Form.Form({
        srcNode: '#J_Form1',
        //联合校验起始日期
        validators: {
            '#group': function (record) {
                if (record.start > record.end) {
                    return '结束日期必须大于起始日期！';
                }
            }
        }
    });

    form1.render();
});