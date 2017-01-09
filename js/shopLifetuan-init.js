require.config({
	baseUrl:'./js'
});
require(['shop-slider','domReady'],function(slider,domReady){
	domReady(function(){
		slider.getData('95000');
		
		slider.btnShow();

		})
});




