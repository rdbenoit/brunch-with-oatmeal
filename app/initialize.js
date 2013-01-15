"use strict";

var Application = require("application"),
    $ = require("jquery");



$(function(){
    var app = Application.create($("body"));
    app.start();

    return app;
});