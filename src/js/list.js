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
     var params = location.search;//'?id=g001'
          params = params.slice(1);
       var datas={
              'qty':12,
              'pagenum':1,
              'cage':'dog'
            }
          if(params){
            datas.cage=params;
           
             $.get('../api/list.php',datas,function(a){
                a=JSON.parse(a);
                 let len=Math.ceil(a.count/a.qty);
                 $('.allpage').html('共'+len+'页');
                cbb(a.data,len);
             });

          }else{
             $.getJSON('../api/pic.json',cbb);
            
          }

     function cbb(a,b,c){
        


            $goodul.html(a.map(function(item){
                let zjs='';
                if(item.jian==1){
                  zjs+='<i>直降</i>'
                }
                if(item.zen==1){
                  zjs+='<i>赠满豆</i>'
                }
                // console.log(zjs)
                return ` <li data-id='${item.id}'><a href='www.baidu.com'><img src=".${item.imgurl}" /></a>
                                       <h6>￥${item.price} ${zjs}</h6> 
                                       <p>${item.title}</p>
                                       <h1><span>已售${item.qty}</span> <span>已有<i style='color:red;'>${item.com}</i>人评价</span> </h1> 
                                       <button ><em></em>加入购物车</button><button><em  class='addq'></em>收藏</button> <div class='active'></div> 
                                       </li>`
            }).join('')





            )
            var $allbutton=$("#allbutton")
            $allbutton.html('');
           
                if(!c){
                    c=1;
                    
                }
                for(let j=0;j<b;j++){
                 
                  if(j+1==c){
                    $('<span/>').addClass('active').html(j+1).appendTo($allbutton)
                    
                  }else{

                  $('<span/>').html(j+1).appendTo($allbutton)
                  }
                  
                }


    $("#allbutton").on('click','span',function(){
              datas.pagenum=$(this).html();
               var num=$(this).html();
              console.log(datas.pagenum)
             $.get('../api/list.php',datas,function(a){
                            a=JSON.parse(a);
                   
                             let len=Math.ceil(a.count/a.qty);
                             $('.allpage').html('共'+len+'页');
                            
                            cbb(a.data,len,num);

                })

              })

             }
    $goodul.on('mouseenter','li',function(){
        $(this).find('div.active').fadeIn();
        $(this).on('click','div.active',function(){
           
          location.href = '../html/details.html ?'+$(this).closest('li')[0].dataset.id ;
        })
          
    });
     $goodul.on('mouseleave','li',function(){
        $(this).find('div.active').fadeOut();
    });

 $('#main .maincenter .mainul').on('click','button',function(){
         if( $(this).index()==4){
           var $img=$(this).closest('li').find('img')
           var $imgclone=$img.clone();
              $imgclone.css({
                    zIndex:800,
                    position:'absolute',
                    left:$img.offset().left,
                    top:$img.offset().top,
                    width:$img.width()
                });
              $imgclone.appendTo('body');
           var $cars=$('.head-rl');
           
          $imgclone.animate({
            top:$cars.offset().top+140,
            width:100,
          },function(){
            $imgclone.animate({ width:30,left:$cars.offset().left},function(){
             
                var $cars=$('.headcar i');
                  var $car1=$('.head-rl span').eq(1).find('i');
                  var cons=$cars.html()*1+1;
                  $cars.html(cons);$car1.html(cons);
              $imgclone.remove();
            })
            
          })

         }
        
 })
 })

});