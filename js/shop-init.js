require.config({
	baseUrl:'./js'
});
require(['shop-slider','domReady'],function(slider,domReady){
	domReady(function(){
		slider.getData();
		slider.btnShow();

		})
});




