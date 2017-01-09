require.config({
	baseUrl:'./js'
});

require(['JHS-map','domReady'],function(fn,domReady){
	domReady(function(){
		fn.rem();
		fn.map("now-position");
		fn.cityList("A");
		fn.cityList("B");
		fn.cityList("C");
		fn.addressRes();
		fn.toggle()
	})
});
