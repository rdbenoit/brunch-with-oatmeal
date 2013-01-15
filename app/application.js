exports.create = function (container) {
    var _ = require("underscore"),
        Backbone = require('backbone'),
        Routers = require('routers');

    Backbone.Layout.configure({
        manage:true,
        fetch:function (path) {
            return path;
        },
        render:function (template, context) {
            return template(context);
        }
    });

    var Application = function (container) {
        this.container = container;
        this.initRouter();
    };

    Application.prototype.start = function () {
        Backbone.history.start();
    };

    Application.prototype.setLayout = function (layout) {
        this.container.html(layout.el);
        return layout;
    };

    Application.prototype.initRouter = function(){
        this.router = Routers.app.create();
    };

    return new Application(container);
};