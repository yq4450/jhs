define(['shop-lazyLoad'],function(lazyLoad){
	return {
		//请求数据
		getData:function(catId){
				catId=catId||'';
				$.ajax({
				type: 'GET',
				url:'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json',
				dataType : "jsonp",  
				jsonp : "callback",
					data:{
					psize:20,
					type:0,
					frontCatId:catId
					
				},
				success:function(json){
					
					var aList=json.itemList;
					for(var i=0;i<aList.length;i++){
						var itemDiv=$('<div class="shopItem"><div class="shopItem_img_box"><a href="http:'+aList[i].baseinfo.itemUrl+'"><img _src="http:'+aList[i].baseinfo.picUrlNew+'"/></a></div><div class="shopItem_txt_box"><div class="itemName"><a href="http:'+aList[i].baseinfo.itemUrl+'"><span class="itemSale">'+
							aList[i].price.discount+'折</span>'+aList[i].name.shortName+'</a></div><div class="price"><span class="nowPrice"><i>&yen;</i>'
							+aList[i].price.actPrice+'</span><del class="oldPrice">&yen;'+aList[i].price.origPrice+'</del></div><div class="sellsNum"><span class="per_num">'+aList[i].baseinfo.stock+'</span>人已购买</div></div>');
						itemDiv.appendTo('.shopList').eq(0);						
					}
					lazyLoad.lazyLoad();
				},
				error:function(){
					console.log("数据获取失败");
				}
				
			});
		},
		//分类按钮
		btnShow:function(){
			$('#listBtn').on('touchend',function(){
				$('#classifyBox').show();
				
			})
		}
		

}
})