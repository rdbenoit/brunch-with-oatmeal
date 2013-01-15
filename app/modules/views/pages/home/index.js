module.exports = {
    create: function (options) {
        var Backbone = require("backbone");
        var Modules = require("modules");

        var Klass = Backbone.View.extend({
            template: Modules.Templates.Pages.home
        });

        return new Klass(options);
    }
};