;require(['config'],function(){
    require(['jquery','head','headser','ban'],function($){
    ;(function($){
       
             $('#Header').load('./html/header.html #header');
             $('#Footer').load('./html/footer.html .comfooter');

             
             var $banc=$('.banc');
          
             $banc.eq(0).lxCarousel({
                imgs:['../imgaes/ban1.jpg','../imgaes/ban2.jpg','../imgaes/ban1.jpg','../imgaes/ban2.jpg','../imgaes/ban1.jpg'],
                buttons:true,page:true,type:'horizontal'
            });
             var $hotgood=$('#salegoods .hot ul');
            
             
//待该部分
             $.getJSON('../api/goodslist.json',cb);
             function cb(a){
              
              $hotgood.html(a.map(function(item){
                return `<li data-id=${item.id}> <img src="${item.imgurl}" alt="" /><p>${item.title}</p><p><span>￥ ${item.price}</span><i class='fr'>已售<em>${item.qty}</em></i></p></li>`
               }).join(''))
             }
//待该部分
//小改
        var $allgooda=$('#mains .allgood h3 ul');
       
        $allgooda.on('click','li',function(){
            $(this).addClass('active').siblings().removeClass('active');
            $(this).closest('.allgood').find('.gooslists').eq($(this).index()).show().siblings().hide();
            
        })
        var $goodlubo=$('#mains .lubo');
      
         $goodlubo.eq(0).lxCarousel({
                imgs:['../imgaes/shop1.jpg','../imgaes/shop2.jpg','../imgaes/shop3.jpg'],
                buttons:true,page:false,type:'horizontal',width:190,height:480
            });
        $goodlubo.eq(1).lxCarousel({
                imgs:['../imgaes/shop1.jpg','../imgaes/shop2.jpg','../imgaes/shop3.jpg'],
                buttons:true,page:false,type:'horizontal',width:190,height:480
            });
        $goodlubo.eq(2).lxCarousel({
                imgs:['../imgaes/shop1.jpg','../imgaes/shop2.jpg','../imgaes/shop3.jpg'],
                buttons:true,page:false,type:'horizontal',width:190,height:480
            });
        $goodlubo.eq(3).lxCarousel({
                imgs:['../imgaes/shop1.jpg','../imgaes/shop2.jpg','../imgaes/shop3.jpg'],
                buttons:true,page:false,type:'horizontal',width:190,height:480
            });
        $goodlubo.eq(4).lxCarousel({
                imgs:['../imgaes/shop1.jpg','../imgaes/shop2.jpg','../imgaes/shop3.jpg'],
                buttons:true,page:false,type:'horizontal',width:190,height:480
            });
         $goodlubo.eq(5).lxCarousel({
                imgs:['../imgaes/shop1.jpg','../imgaes/shop2.jpg','../imgaes/shop3.jpg'],
                buttons:true,page:false,type:'horizontal',width:190,height:480
            });

//小该
        var $pingjia=$('#mainFooter .Footerl ul');
        $.getJSON('../api/pingjia.json',pj);
        function pj(a){
            console.log(a)
            $pingjia.html(a.map(function(item){

                return`<li data-id=${item.id}><div class='fl'>
                         <img src="${item.img1}"/>
                         <p>${item.name}</p>    
                     </div>
                    <p class='gouyin'><i></i><span>${item.fen}分</span><span class='fr'>奖励${item.qty}个波奇豆</span></p>
                     <p><a href="">${item.title}</a></p>
                    <div class='fr'>
                               <img src="${item.img2}"/>
                        </div> </li>`

            }).join(''))
        }
     })($);
    })
});