BUI.use('bui/form', function (Form) {
    new Form.Form({
        srcNode: '#J_Form1'
    }).render();

    new Form.Form({
        srcNode: '#J_Form2'
    }).render();

    new Form.Form({
        srcNode: '#J_Form3'
    }).render();

    new Form.Form({
        srcNode: '#J_Form4'
    }).render();

    var data = [{
        "id": "1", "text": "山东", "children": [
            {"id": "11", "text": "济南", "leaf": false},
            {
                "id": "12", "text": "淄博", "leaf": false, "children": [
                {"id": "121", "text": "高青", "leaf": true}
            ]
            }
        ]
    }];
    BUI.Form.Group.Select.addType('test', {
        data: data
    });

    new Form.Form({
        srcNode: '#J_Form5'
    }).render();


});