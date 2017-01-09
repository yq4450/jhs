define(function(){
    return{

        // rem自适应布局
        rem:function(){
            ;(function(win,doc){
                var rem;
                rem = 20/320*doc.documentElement.clientWidth;
                doc.documentElement.style.fontSize = rem+'px';
                win.addEventListener('resize',function(){
                    rem = 20/320*doc.documentElement.clientWidth;
                    doc.documentElement.style.fontSize = rem+'px';
                },false)
            })(window,document);
        },

        //自动获取当前地址以及点击获取当前地址
        map:function(id){

            var oNow=document.getElementById('now-pos');
            var oI=document.getElementById("true-icon");

            oNow.addEventListener("touchstart",function(){

                // 百度地图API功能
                var oPos=document.getElementById(id);
                var map = new BMap.Map("allmap");
                var point = new BMap.Point(117.331398,39.897445);
                map.centerAndZoom(point,12);

                function myFun(result){
                    var cityName = result.name;
                    map.setCenter(cityName);
                    // alert("当前定位城市:"+cityName);
                    oPos.innerHTML=cityName;

                }
                var myCity = new BMap.LocalCity();
                myCity.get(myFun);

            },false);

            setTimeout(function(){
                // 百度地图API功能
                var oPos=document.getElementById(id);
                var map = new BMap.Map("allmap");
                var point = new BMap.Point(117.331398,39.897445);
                map.centerAndZoom(point,12);

                function myFun(result){
                    var cityName = result.name;
                    map.setCenter(cityName);
                    // alert("当前定位城市:"+cityName);
                    oPos.innerHTML=cityName;
                }
                var myCity = new BMap.LocalCity();
                myCity.get(myFun);
                oI.style.display="block";
            },200);
        },

        //创建城市列表
        cityList:function(id){
            var area={
                "city":[{
                    "name":"杭州",
                    "area":["上城区","下城区","江干区","拱墅区","西湖区","滨江区","萧山区","余杭区","建德市","富阳市","临安市","桐庐县","淳安县","其他区"]
                }]
            };
            var let={
                "A":["阿坝","阿拉善","阿里","安康","安庆","鞍山","安顺","安阳","澳门"],
                "B":["北京","白银","保定","宝鸡","保山","包头","巴中","北海","蚌埠","本溪","毕节","滨州","百色","亳州"],
                "C":["重庆","成都","长沙","长春","沧州","常德","昌都","长治","常州","巢湖","潮州","承德","郴州","赤峰","池州","崇左","楚雄","滁州","朝阳"]
            };

            var oCon=document.getElementById(id);
            var oH=document.createElement('h3');
            oH.className='title';
            oH.innerHTML=id;
            oCon.appendChild(oH);

            var oUl=document.createElement('ul');
            oUl.className="city";
            var res=/[A-Z]/;
            if(res.test(id)){
                for(var i=0;i<let[id].length;i++){
                    var oLi=document.createElement('li');
                    var oSpan=document.createElement('span');
                    oSpan.innerHTML=let[id][i];
                    oLi.appendChild(oSpan);
                    oUl.appendChild(oLi);
                }
            }
            oCon.appendChild(oUl);
        },

        //地址解析
        addressRes:function(){
            var oList=document.getElementById('list');
            var oPos=document.getElementById("now-position");
            var oI=document.getElementById("true-icon");
            oList.addEventListener("touchstart",function(ev){
                var ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if(target.nodeName.toLowerCase() == 'span'){
                    // alert(target.innerHTML);
                    oPos.innerHTML=target.innerHTML;
                }
                // 百度地图API功能
                var map = new BMap.Map("allmap");
                var point = new BMap.Point(116.331398,39.897445);
                map.centerAndZoom(point,12);
                // 创建地址解析器实例
                var myGeo = new BMap.Geocoder();
                // 将地址解析结果显示在地图上,并调整地图视野
                myGeo.getPoint(target.innerHTML, function(point){
                    if (point) {
                        map.centerAndZoom(point, 16);
                        map.addOverlay(new BMap.Marker(point));
                    }else{
                        alert("您选择地址没有解析到结果!");
                    }
                }, target.innerHTML);
                oI.style.display="block";
            },false);

        },

        // 点击隐藏其余列表，显示当前列表
        toggle:function(){
            var oList=document.getElementById('list');
            var aH3=oList.getElementsByTagName("h3");
            var aUl=oList.getElementsByTagName("ul");
            for(var i=0;i<aH3.length;i++){
                (function (index){
                    aH3[index].addEventListener("touchstart",function(){
                        for(var i=0;i<aH3.length;i++){
                            // aH3[i].className='';
                            aUl[i].style.display='none';
                        }
                        // this.className='on';
                        aUl[index].style.display='block';
                    },false);

                })(i);
            }
        }

    }
});