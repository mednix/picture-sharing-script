App.module("Search",function(module, App, Backbone, Marionette, $, _){

    //the found items are stored here in a backbone collection
   var items,
       searchView;
    items=new App.Catalog.Models.ItemCollection();
    items.fetch();
    //notify the app
    if(items.length){
        //notify the app of found items
        App.vent.trigger("Search:found",items);
    }
    else{
        //notify the app if zero object found
        App.vent.trigger("Search:notFound");
    }
});