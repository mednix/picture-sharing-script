App.module("Finder",function(Module, App, Backbone, Marionette, $, _){
    Module.Views.FinderLayout=Marionette.Layout.extend({
        template:App.TemplateCache.get("finder/finder"),
        regions:{
            catalog:"#catalog",
            search:"#search"
        }

    });
});