App.module("Displayer.Views",function(Module, App, Backbone, Marionette, $, _){
    Module.DisplayerLayout=Marionette.Layout.extend({
        template:"displayer/displayer",
        regions:{
            imageRegion:"#image"
        },
        onShow:function(){
           // this.imageRegion.show();
        }
    });

});