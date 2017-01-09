define({
    /*
     * @desc 图片延迟加载.
     * @parmas String
     * @return none
     */
   lazyLoad:function(){
			function loadImg(){
				for(var i=0;i<$('.shopList img').length;i++){
					if($('.shopList img').eq(i).offset().top<$(window).scrollTop()+$(window).height()){
						$('.shopList img').eq(i).attr('src',$('.shopList img').eq(i).attr('_src'));
						
					}
				}
			}
			//延迟Ajax完成
			loadImg();
			$(window).on('scroll',function(){
				loadImg();
			});
			$(window).on('resize',function(){
				loadImg();
				
			});
		}
});


		