

//图片延迟加载

function getPos(obj){
            var l=0;
            var t=0;
            while(obj){
                l+=obj.offsetLeft;
                t+=obj.offsetTop;

                obj=obj.offsetParent;
            }
            return {left:l, top:t}
        }
        window.onload=window.onscroll=window.onresize=function(){
            var aImg=document.querySelectorAll('.goods-list img');

            var scrollT=document.documentElement.scrollTop || document.body.scrollTop;
            var scrollBottom=document.documentElement.clientHeight+scrollT;

            for(var i=0; i<aImg.length; i++){
                var imgT=getPos(aImg[i]).top;

                if(scrollBottom>=imgT){ //条件
                    //给图片src赋值
                    aImg[i].src=aImg[i].getAttribute('_src');
                }
            }

        };