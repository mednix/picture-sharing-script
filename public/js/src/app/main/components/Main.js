App.module("Image",function(Module, App, Backbone, Marionette, $, _){
    Module.Components.Main=function(){

    };
    _.extend(Module.Components.Main.prototype,Backbone.Events,{
        start:function(){
            if(this._isStarted) return;
            this.model=new Module.Models.Image();
            this.layout=new Module.Layouts.MainLayout();
            App.appRegion.show(this.layout);
            this._isStarted=true;
        },
        stop:function(){
            delete this.model;
            delete this.layout;
        },
        add:function(){

        }

    });


});