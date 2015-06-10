
seajs.use(['backbone/1.1.2/backbone'], function(Backbone) {
    var Meal = new Backbone.Model({
        defaults: {
            "appetizer":  "caesar salad",
            "entree":     "ravioli",
            "dessert":    "cheesecake"
        }
    });

    Meal.save({
        aaa: '1112222'
    }, {
        url: '/data/formSearch/test.json',
        success: function() {
            console.log(arguments);
        },
        error: function() {
            console.log(arguments);
        }
    });
});
