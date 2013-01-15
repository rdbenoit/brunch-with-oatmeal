exports.create = function (container) {
    var _ = require("underscore"),
        Backbone = require('backbone'),
        Views = require('views'),
        Routers = require('routers'),
        Templates = require('templates');

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
        var layout = Views.Layouts.main.create({
            name: "main",
            template: Templates.Layouts.main
        });
        container.html(layout.el);
        layout.render();

        return layout;
    };

    Application.prototype.initRouter = function(layout){
        Routers.app.create({
            layout: layout
        });
    };

    return new Application();
};