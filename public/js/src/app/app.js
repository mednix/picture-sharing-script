var App=(function(root){
    var App;
    App=new Backbone.Marionette.Application();
    App.addRegions({
       mainRegion:"#main"
    });
    Marionette.Handlebars.path="js/src/app/";
    return App;
})(this);
App.on("initialize:after",function(){
    App.Displayer.start({
        region:App.mainRegion
    });

});
$(function(){
    App.start();
});