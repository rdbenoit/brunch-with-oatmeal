require.define({
    "jquery":function(require, exports, module){
        return module.exports = $;
    },
    "underscore":function(require, exports, module){
        return module.exports = _;
    },
    "backbone":function(require, exports, module){
        return module.exports = Backbone;
    }
});