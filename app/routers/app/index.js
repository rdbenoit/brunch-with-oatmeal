module.exports = {
    create: function (options) {
        var Backbone = require("backbone");
        var Views = require("views");
        var mediator = require("lib/mediator");

        var Klass = Backbone.Router.extend({
            routes: {
                "":"showDefault"
            },
            showDefault: function(){
                mediator.trigger("change:content", Views.Pages.home.create());
            }
        });

        return new Klass();
    }
};