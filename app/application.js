exports.create = function (container) {
    var _ = require("underscore"),
        Backbone = require('backbone');

    Backbone.Layout.configure({
        fetch:function (path) {
            return path;
        },
        render:function (template, context) {
            return template(context);
        }
    });

    var Application = function () {

    };

    Application.prototype.start = function () {
    };

    Application.prototype.init = function (layout) {
        container.html(layout.el);
    };

    return new Application();
};