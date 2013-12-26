App.module("Image",function(Module, App, Backbone, Marionette, $, _){
    Module.Routers.ImageRouter=Marionette.AppRouter.extend({
        controller: {
            index:function(){
                var image=new Module.Components.Image();
            },
            show:function(id){
                var image=new Module.Components.Image();
            }
        },
        appRoutes:{
            "image":"index",
            "image/:id":"show"
        }
    });



});