App.module("Catalog",function(module, App, Backbone, Marionette, $, _){
    Module.Views=Module.Views || {};
    Module.Models=Module.Models || {};
    Module.addInitialiser(function(){
        App.vent.on("Images:found",function(){

        });
        App.vent.on("Images:notFound",function(){

        });
        Module.show();
    });
});