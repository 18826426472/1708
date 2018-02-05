;require(['config'],function(){
    require(['jquery','headser'],function($){
       
         $('#header').load('../html/header.html #header',function(){
                    $('.all-goods').hide();
                  
                    $('.goods .title').hover(function(){
                        $('.all-goods').fadeIn();
                       
                  $('.all-goods .item').hover(function(){

                    $(this).addClass('active').find('s').hide();

                    $(this).find('.product-wrap').show();

                     },function(){

                    $(this).removeClass('active').find('s').show();

                    $(this).find('.product-wrap').hide();

                     });
                       $('.all-goods').mouseleave(function(){

                             $('.all-goods').fadeOut();
                       })
                    })
                 });
         $('#footer').load('../html/footer.html .comfooter');
         var $navd=$('#main .maincl dt');
         $navd.on('click',function(){
            var hei=$(this).closest('dl').height();
            hei=hei<=28?'auto':28;
            $(this).closest('dl').css('height',hei);
            $(this).find('em').toggleClass('act');
         })
        var $hotsale=$('.hotsale ul');
        $.getJSON('../api/hotsale.json',cb);
        function cb(a){
           
           $hotsale.html(a.map(function(item){
                return`<li>
                                <a href=""><img src="${item.imgurl}" height="170" width="170" alt="" /></a>
                                <p><i style='color:red;'>￥${item.price}</i>
                                <span class='fr'>已售${item.qty}</span></p>

                                
                                <p><a href="">${item.name} ${item.title}</a></p>
                            </li>`
           }).join(''))
        }
      var $hospan=$('.maincr .mores span');
      $hospan.hover(function(){
        $(this).addClass('active').closest('h6').addClass('active');
      },function(){
        $(this).removeClass('active').closest('h6').removeClass('active');;
      })
       $hospan.on('click',function(){
            console.log($(this))
             $(this).toggleClass('on');
             $(this).closest('.mainctop').find('.hidde').toggleClass('active')
        })
    var $goodul=$('#main .maincenter .mainul');
     $.getJSON('../api/pic.json',cbb);
     function cbb(a){
        // console.log(a)


    $goodul.html(a.map(function(item){
        let zjs='';
        if(item.jian==1){
          zjs+='<i>直降</i>'
        }
        if(item.zen==1){
          zjs+='<i>赠满豆</i>'
        }
        // console.log(zjs)
        return ` <li data-id='${item.id}'><img src="${item.imgurl}" />
                               <h6>￥${item.price} ${zjs}</h6> 
                               <p>${item.title}</p>
                               <h1><span>已售${item.qty}</span> <span>已有<i style='color:red;'>${item.com}</i>人评价</span> </h1> 
                               <button ><em></em>加入购物车</button><button><em  class='addq'></em>收藏</button>  
                            </li>`
    }).join(''))


     }
 $goodul=$('#main .maincenter .mainul').on('click','button',function(){
         if( $(this).index()==4){
           var $img=$(this).closest('li').find('img')
           var $imgclone=$img.clone();
              $imgclone.css({
                    position:'absolute',
                    left:$img.offset().left,
                    top:$img.offset().top,
                    width:$img.width()
                });
              $imgclone.appendTo('body');
           var $cars=$('.head-rl');
           console.log($cars)
          $imgclone.animate({
            top:$cars.offset().top+140,
            width:100,
          },function(){
            $imgclone.animate({ width:30,left:$cars.offset().left},function(){
              $imgclone.remove();
            })
            
          })

         }
        
 })
 })

});