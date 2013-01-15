var Application = require("application"),
    Views = require('views'),
    $ = require("jquery");

$(function(){
    var app = Application.create($("body"));
    app.setLayout(Views.Layouts.main.create()).render();
    app.start();
    return app;
});