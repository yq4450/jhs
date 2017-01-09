require.config({
	baseUrl:'./js'
});

require(['cor-main','domReady'],function(main,domReady){
	domReady(function(){
		main.rem();
		main.slider();
	});
});
