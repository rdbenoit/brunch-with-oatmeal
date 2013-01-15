module.exports = {
    create: function (options) {
        var Backbone = require("backbone");
        var Views = require("views");
        var mediator = require("mediator");

        var Klass = Backbone.Router.extend({
            routes: {
                "":"showDefault"
            },
            showDefault: function(){
                mediator.trigger("change:page", Views.Pages.home.create());
            }
        });

        return new Klass();
    }
};