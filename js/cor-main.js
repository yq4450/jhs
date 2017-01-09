define([], function() {
	return {
		//rem
		rem:function(){
			var rem;
				(function(win, doc) {
					rem = 20 / 320 * doc.documentElement.clientWidth;
					doc.documentElement.style.fontSize = rem + 'px';
					win.addEventListener('resize', function() {
						rem = 20 / 320 * doc.documentElement.clientWidth;
						doc.documentElement.style.fontSize = rem + 'px';
					}, false);
				})(window, document);
		},
		//轮播图
		slider:function(){
            var oBox = document.querySelector('.cor_banner');
            var oUl = oBox.children[0];
            var oOl = oBox.children[1];
            var aLi = oUl.children;
            var aBtn = oOl.children;
            
            var rem;
			(function(win, doc) {
				rem = 20 / 320 * doc.documentElement.clientWidth;
				doc.documentElement.style.fontSize = rem + 'px';
				win.addEventListener('resize', function() {
					rem = 20 / 320 * doc.documentElement.clientWidth;
					doc.documentElement.style.fontSize = rem + 'px';
				}, false);
			})(window, document);
				
				

            //设置ul的宽度
            oUl.style.width = aLi[0].offsetWidth*aLi.length/rem+'rem';
            var iNow = 1;           //当前是第几个
            var bOk = false;       //开关
            var x = -16;
            oUl.addEventListener('touchstart',function(ev){
                if(bOk){
                    return;
                }
                bOk = true;
                oUl.style.WebkitTransition = 'none';
                oUl.style.transition = 'none';
                var oTouch = ev.targetTouches[0];
                var downX = oTouch.pageX/rem;
                var disX = downX-x;
                function fnMove(ev){
                    var oTouch = ev.targetTouches[0];
                    x = oTouch.pageX/rem-disX;
                    oUl.style.WebkitTransform = 'translate3d('+x+'rem,0,0)';
                    oUl.style.transform = 'translate3d('+x+'rem,0,0)';
                }
                function fnEnd(ev){
                    document.removeEventListener('touchmove',fnMove,false);
                    document.removeEventListener('touchend',fnEnd,false);
                    var oTouch = ev.changedTouches[0];
                    var upX = oTouch.pageX/rem;
                    if(Math.abs(upX-downX)>100/rem){
                        //动
                        if(downX>upX){
                            //左
                            iNow++;
                        }else if(downX<upX){
                            //右
                            iNow--;
                        }
                    }
                    oUl.style.WebkitTransition = '.3s all ease';
                    oUl.style.transition = '.3s all ease';
                    x = -iNow*aLi[0].offsetWidth/rem;
                    oUl.style.WebkitTransform = 'translate3d('+x+'rem,0,0)';
                    oUl.style.transform = 'translate3d('+x+'rem,0,0)';


                    function tranEnd(){
                        oUl.removeEventListener('transitionend',tranEnd,false);
                          console.log(iNow);
                        if(iNow==aLi.length-1){
                            iNow = 1;
                        }else if(iNow==0){
                            iNow = aLi.length-2;
                        }
                        x = -iNow*aLi[0].offsetWidth/rem;
                        oUl.style.WebkitTransition = 'none';
                        oUl.style.transition = 'none';
                        oUl.style.WebkitTransform = 'translate3d('+x+'rem,0,0)';
                        oUl.style.transform = 'translate3d('+x+'rem,0,0)';

                        for(var i=0;i<aBtn.length;i++){
                            aBtn[i].classList.remove('on');
                        }
                        aBtn[iNow-1].classList.add('on');

                        bOk = false;

                    }
                    oUl.addEventListener('transitionend',tranEnd,false);

                }
                document.addEventListener('touchmove',fnMove,false);
                document.addEventListener('touchend',fnEnd,false);
                ev.preventDefault&&ev.preventDefault();
            },false)
		},
	}
});