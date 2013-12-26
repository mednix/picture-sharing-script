App.module("Catalog",function(Module, App, Backbone, Marionette, $, _){
    Module.Views.CatalogView=Marionette.CollectionView.extend({
        className:"catalog",
        //template:Marionette.TemplateCache.get("catalog/catalog"),
        itemView:App.Image.Views.ImageView
    });
});