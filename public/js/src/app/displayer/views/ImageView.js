App.module("Displayer.Views", function (Module, App, Backbone, Marionette, $, _) {
    Module.ImageView=Marionette.ItemView.extend({
        className:"image",
        template:"displayer/image"
    });
});