App.module("Image",function(Module, App, Backbone, Marionette, $, _){
    Module.Views.ImageView=Marionette.ItemView.extend({
        className:"image",
        template:Marionette.TemplateCache.get("image/image")
    });
});