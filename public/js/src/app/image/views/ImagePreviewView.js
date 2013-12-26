App.module("Image",function(Module, App, Backbone, Marionette, $, _){
    Module.Views.ImagePreviewView=Marionette.ItemView.extend({
        className:"image-preview",
        template:Marionette.TemplateCache.get("image/image-preview")
    });
});