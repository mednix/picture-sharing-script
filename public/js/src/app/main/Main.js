App.module("Main",function(Module, App, Backbone, Marionette, $, _){
   this.startWithParent=false;
   Module.addInitialiser(function(options){
       if(Module.current){
           Module.current.stop(options);
       }
       Module.current=App.module(options.module);
       new Module.current.Router();
       Module.current.start(options);

   });
    Module.addFinaliser(function(options){
        if(Module.current){
            Module.current.stop(options);
            delete Module.current;
        }

    });
});