App.module("Image",function(Module, App, Backbone, Marionette, $, _){
    Module.Views.ImageView=Marionette.ItemView.extend({
        className:"thumbnail thumbnail-large",
        template:Marionette.TemplateCache.get("image/image")
    });
});