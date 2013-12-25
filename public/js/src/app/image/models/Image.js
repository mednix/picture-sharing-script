App.module("Image.Views.Image",function(module, App, Backbone, Marionette, $, _){
    return Backbone.Model.extend({
        defaults:{
            src:"",
            title:"",
            tags:[]
        }
    });

});