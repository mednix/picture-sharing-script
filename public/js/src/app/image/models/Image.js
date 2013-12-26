App.module("Image",function(Module, App, Backbone, Marionette, $, _){
    Module.Models.Image=Backbone.Model.extend({
        defaults:{
            src:"",
            title:"",
            tags:[]
        }
    });

});