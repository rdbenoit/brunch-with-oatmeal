"use strict";
var http = require("http"),
    httpProxy = require("http-proxy"),
    connect = require("connect"),
    config = require("config"),
    path = require("path"),
    _ = require("underscore");

var publicDir = config.publicDir || path.resolve(".");

exports.startServer = function(port, path){

    var proxy = new httpProxy.RoutingProxy();

    var app = connect()
        .use(connect.favicon())
        .use(function (req, res, next) {
            if(_(config.proxy.intercept).any(function(intercept){
                return req.url.indexOf(intercept) === 0;
            })) {
                return proxy.proxyRequest(req, res, config.proxy);
            }

            if(req.url.indexOf(path) === 0)
                return next();

            return res.send('No found', 404);
        })
        .use(connect.static(publicDir));

    http.createServer(app).listen(config.port);
};