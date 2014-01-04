App.module("Common.Models",function(Module, App, Backbone, Marionette, $, _){
    Module.Image=Backbone.Model.extend({
        defaults:{
            src:"",
            title:"",
            tags:[]
        }
    });

});