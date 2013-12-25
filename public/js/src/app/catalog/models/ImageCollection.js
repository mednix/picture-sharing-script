App.module("Catalog",function(Module, App, Backbone, Marionette, $, _){
    Module.Models.ImageCollection=Backbone.Collection.extend({
        model:App.Image.Models.Image
    });
});