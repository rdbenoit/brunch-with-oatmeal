module.exports = {
    create: function(){
        var Backbone = require("backbone"),
            Templates = require("templates"),
            mediator = require("lib/mediator");

        var Klass = Backbone.View.extend({
            template:Templates.Layouts.main,
            initialize: function(){
                mediator.on("change:content", onChangeContent, this);
            }
        });

        return new Klass();

        function onChangeContent(view){
            this.setView(".content", view).render();
        }
    }
};