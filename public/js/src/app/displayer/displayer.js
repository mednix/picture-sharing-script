App.module("Displayer",function(Module, App, Backbone, Marionette, $, _){
    this.startWithParent=false;
    Module.API={
        show:function(region){
            var image,
                imageView,
                displayerLayout;
            image =new App.Common.Models.Image({
                src:"img/upload/image.jpg",
                title:"Une image pour le test"
            });
            imageView=new App.Displayer.Views.ImageView({model:image});
            displayerLayout=new App.Displayer.Views.DisplayerLayout();
            region.show(displayerLayout);
            displayerLayout.imageRegion.show(imageView);
        }
    };
    Module.addInitializer(function(options){
        Module.API.show(options.region);
    });
});