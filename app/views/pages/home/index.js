module.exports = {
    create: function (options) {
        var Backbone = require("backbone");
        var Templates = require("templates");

        var Klass = Backbone.View.extend({
            template: Templates.Pages.home
        });

        return new Klass(options);
    }
};