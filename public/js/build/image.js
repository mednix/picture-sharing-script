/*! pictr 2013-12-25 */
App.module("Image",function(module, App, Backbone, Marionette, $, _){
    Module.Views=Module.Views || {};
    Module.Models=Module.Models || {};
    Module.Components=Module.Components || {};
});
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

App.module("Image",function(Module, App, Backbone, Marionette, $, _){
    Module.Models.Image=Backbone.Model.extend({
        defaults:{
            src:"",
            title:"",
            tags:[]
        }
    });

});
App.module("Image",function(Module, App, Backbone, Marionette, $, _){
    Module.Views.ImagePreviewView=Marionette.ItemView.extend({
        className:"image-preview",
        template:Marionette.TemplateCache.get("image/image-preview")
    });
});
App.module("Image",function(Module, App, Backbone, Marionette, $, _){
    Module.Views.ImageView=Marionette.ItemView.extend({
        className:"image",
        template:Marionette.TemplateCache.get("image/image")
    });
});
