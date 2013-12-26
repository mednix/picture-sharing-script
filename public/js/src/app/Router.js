var Router=(function(root){
    var Router=Backbone.Marionette.AppRouter.extend({
        controller:{
            dispatch:function(module){
               var main=new App.Main();
                main.start();
            }
        },
        appRoutes:{
            ":module":"dispatch"
        }
    });
    return Router;
})(this);