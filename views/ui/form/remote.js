BUI.use('bui/form', function (Form) {
    new Form.Form({
        srcNode: '#J_Form'
    }).render();

    var f1 = new Form.Form({
        srcNode: '#J_Form1'
    }).render();

    var field = f1.getField('a');
    field.set('remote', {
        url: '/data/formSearch/student.json',
        dataType: 'json',
        callback: function (data) {
            $('#info').text(BUI.JSON.stringify(data));
        }
    });
});