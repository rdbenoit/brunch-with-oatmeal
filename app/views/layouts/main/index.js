module.exports = {
    create: function(options){
        var Backbone = require("backbone");
        var mediator = require("mediator");

        var Klass = Backbone.Layout.extend({
            template:options.template,
            className:"layout " + options.name,
            initialize: function(){
                mediator.on("change:page", onChangePage, this);
            }
        });

        return new Klass();

        function onChangePage(page){
//            console.log("should change the content to ", page);
            this.setView(".content", page).render();
        }
    }
};