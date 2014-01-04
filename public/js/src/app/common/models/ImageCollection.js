App.module("Common.Models",function(Module, App, Backbone, Marionette, $, _){
    Module.ImageCollection=Backbone.Collection.extend({
        model:Module.Image
    });
});