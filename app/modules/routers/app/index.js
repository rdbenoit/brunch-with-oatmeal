module.exports = {
    create: function (options) {
        var Backbone = require("backbone");
        var Modules = require("modules");
        var mediator = require("mediator");

        var Klass = Backbone.Router.extend({
            routes: {
                "":"showDefault"
            },
            showDefault: function(){
                mediator.trigger("change:page", Modules.Views.Pages.home.create());
            }
        });

        return new Klass();
    }
};