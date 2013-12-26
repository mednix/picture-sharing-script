App.module("Image",function(Module, App, Backbone, Marionette, $, _){
    Module.Components.Image=function(){

    };
    _.extend(Module.Components.Image.prototype,Backbone.Events,{
        start:function(){
            if(this._isStarted) return;
            this.model=new Module.Models.Image();
            this.view=new Module.Views.ImageView(this.model);
            this._isStarted=true;
        },
        stop:function(){
            delete this.model;
            this.view.remove();
        }

    });


});