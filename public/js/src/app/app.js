var App=(function(root){
    var App;
    App=new Backbone.Marionette.Application();
    App.addRegion({
       appRegion:"#app"
    });
    Marionette.Handlebars.path="js/src/app/";
    return App;
})(this);