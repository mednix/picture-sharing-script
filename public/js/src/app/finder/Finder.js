App.module("Finder",function(Module, App, Backbone, Marionette, $, _){
    Module.Layouts=Module.Layouts || {};
    Module.Models=Module.Models || {};
    Module.Routes=Module.Routes || {};
    Module.addInitialiser(function(){
        App.Catalog.start();
        App.Search.start();
    });
});