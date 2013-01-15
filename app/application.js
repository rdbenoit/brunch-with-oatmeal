module.exports.create = function (container) {
    var _ = require("underscore"),
        Backbone = require('backbone'),
        Modules = require('modules');

    Backbone.Layout.configure({
        manage:true,
        fetch:function (path) {
            return path;
        },
        render:function (template, context) {
            return template(context);
        }
    });

    var Application = function () {
        var layout = this.initLayout();
        this.initRouter(layout);
    };

    Application.prototype.start = function () {
        Backbone.history.start();
    };

    Application.prototype.initLayout = function () {
        var layout = Modules.Views.Layouts.main.create({
            name: "main",
            template: Modules.Templates.Layouts.main
        });
        container.html(layout.el);
        layout.render();

        return layout;
    };

    Application.prototype.initRouter = function(layout){
        Modules.Routers.app.create({
            layout: layout
        });
    };

    return new Application();
};