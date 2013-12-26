App.module("Main",function(Module, App, Backbone, Marionette, $, _){
    Module.Layouts.MainLayout=Marionette.Layout.extend({
        template:App.TemplateCache.get("main/main"),
        regions:{
            main:"#main"
        }

    });
});