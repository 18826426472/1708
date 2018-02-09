;require(['config'],function(){
    require(['jquery','headser','gdsZoom'],function($){
          var orderid='';
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

           // $.getJSON('../api/good.json',cb);
           // function cb(a){
           //    console.log(a)
           // }
      var $binimg=$('.maintl .bigimg');
     
     var gooda='';
      $('.maintl ul li').on('click','img',function(){
      
        $(this).closest('li').addClass('active').siblings().removeClass('active')
        $binimg.find('img').attr({
            src:this.src,
            'data-big':this.dataset.big||this.src
        })
      })
       $binimg.gdsZoom({
        position:'right'
      });


        var params = location.search;//'?id=g001'
          params = params.slice(1);
          if(params){
            var pa={'id':params}
           
           $.get('../api/details.php',pa,function(a){
            
              a=JSON.parse(a);
             
              orderid=a.data[0].id;
              cbs(a.data);
              cbx(a.data1)
           })

          }
          else{

            $.getJSON('../api/good.json',cbs);
            
            $.getJSON('../api/hotsales.json',cbx);
          }
        
        function cbx(a){
          
          var $hotsale=$('.hotsale ul');
           $hotsale.html(a.map(function(item){
                return`<li>
                                <a href=""><img src=".${item.imgurl}" height="170" width="170" alt="" /></a>
                                <p><i style='color:red;'>￥${item.price}</i>
                                <span class='fr'>已售${item.qty}</span></p>

                                
                                <p><a href="">${item.name} ${item.title}</a></p>
                            </li>`
           }).join(''))
        }

         function cbs(a){
          gooda=a;
          var img1=a[0].img1.split(',');
          var img2=a[0].img2.split(',');
          $('.maintl .bigimg img').attr({
              src:img1[0],
              'data-big':img2[0]
          });
          var smimg=$('.maintl ul li img');
          for(let i=0;i<smimg.length;i++){
              smimg.eq(i).attr({
              src:img1[i+1],
              'data-big':img2[i+1]
          });
          }
          
          var detprice='￥'+a[0].price;
          var opricee='￥'+a[0].oprice;

          var $maintcbox=$('.maintc .box p').eq(0);
         $maintcbox.eq(0).find('span').html(detprice);
         var h22=a[0].name +' '+ a[0].title;
          $maintcbox.closest('.box').prev().html(h22);
           $maintcbox.next().find('i').html(opricee);
          var $maintrs=$('.maintr ul li p i');
         $maintrs.eq(0).html(a[0].name);
          $maintrs.eq(1).html(a[0].qty);
           $maintrs.eq(2).html(a[0].manyi);
            $maintrs.eq(3).html(a[0].com);
            $('.mainc-cr h4 i').html(a[0].com);
         }
        var $mainc_cr=$('.mainc-cr h4').offset().top;
          var spans=$('.mainc-cr h4 span:not(:last)');
                spans.click(function(){
                  $(this).addClass('active').siblings().removeClass('active');
                    var sTops=$('.maincbox').eq($(this).index()).offset().top;
                    console.log(sTops)
                    $('body,html').animate({"scrollTop":sTops},500)
                })
       
      $(window).scroll(function(){
                var top1=$('.maincbox').eq(1).offset().top;
                var top2=$('.maincbox').eq(2).offset().top;
                // console.log(top1,top2)
                var sTop=$(document).scrollTop();
                
                if(sTop>$mainc_cr){
                    $('.mainc-cr h4').addClass('active');
                }else{
                     $('.mainc-cr h4').removeClass('active');
                }



      var $floor =$('.maincbox').filter(function(index, ele) {
            return Math.abs($(this).offset().top - sTop) < $(this).height() / 2;
        })

        //根据楼层的索引 设置楼梯号的 样式
       
        var indexs=$floor.index();
        if(indexs==-1){
          indexs=2;
        }
       $('.mainc-cr h4').find("span").eq(indexs-1).addClass("active").siblings().removeClass("active");
            
            })
         var $pj=$('#pj');
          $.getJSON('../api/detailspin.json',csa);  
          function csa(a){
              var pa=a[0];
              var arra=a.slice(1,6)
              
            var $all=$('.maincboxt .divfirst .all');
            
            $all.html(pa.all);
            $all.closest('div').find('span').eq(0).find('i').html(pa.afen);
            // .pre().find('i').html(pa.afen);
           var allp=$all.closest('.divfirst').next().find('p');
            allp.eq(0).find('i').html(pa.a);
            allp.eq(1).find('i').html(pa.b);
            allp.eq(2).find('i').html(pa.c);
            var $allpro=$('.maincboxt .pro .gb');
            var allpros=$('.maincboxt .pro .bg').width();
            $allpro.eq(0).css({width:pa.a/pa.all*allpros});
             $allpro.eq(1).css({width:pa.b/pa.all*allpros});
              $allpro.eq(2).css({width:pa.c/pa.all*allpros});

              var $maincboxi=$('.maincbox h3 span i');
              $maincboxi.eq(0).html(pa.all);
              $maincboxi.eq(1).html(pa.a);
              $maincboxi.eq(2).html(pa.b);
              $maincboxi.eq(3).html(pa.c);
               $maincboxi.eq(4).html(pa.s);


              var $pjs=$('#pj');
              createlist(arra,0);
            function createlist(arra,b){

           $pjs.html(arra.map(function(item){
                  let img2=item.img2.split(',');
                  let imag='<ul>'+img2.map(function(ite){
                      return`<li> <img src="${ite}"/></li>`
                    }).join('')+'</ul>';

                  return` <div class='clearfix boxs'>
                                    <div class="fl boxs1">
                                        <img src="${item.img1}" alt="" />
                                        <p>${item.name}</p>
                                        <p style='color=:red;'>${item.len}</p>
                                    </div>
                                <div class="fl boxs2">
                                    <p>评分<i style='color:red;'>${item.fen}</i>分</p>
                                    <p>内容<i>${item.title}</i></p>
                                    晒单：
                                    ${imag}
                                </div>
                         </div>` }).join('')) 

             var lens=Math.ceil((a.length-1)/5);
            
             $('h2.spanx').html('');
              for(let i=0;i<lens;i++){

                  if(i==b){
                     $('<span/>').addClass('active').html(i+1).appendTo('h2.spanx')
                  }else{

                  $('<span/>').html(i+1).appendTo('h2.spanx')
                  }
              }
            }
            
            var hh5=$('h2.spanx');
           
            hh5.on('click','span',function(){
                if($(this).index()==0){
                  arra=a.slice(1,6)
                }else{
                  arra=a.slice(6)
                 
                }
                let b=$(this).index();
               
                 createlist(arra,b);
                
                
                 
            })

                        
          }
      var $addcars=$('.addcars');
     $addcars.on('click',function(){
        var $carqty=$('.carqty');
        var oldimg=$('.bigimg img');
        var imgclone=oldimg.clone();
                imgclone.css({
                    zIndex:800,
                    position:'absolute',
                    left:oldimg.offset().left,
                    top:oldimg.offset().top,
                    width:oldimg.width()
                });
              imgclone.appendTo('body');

          imgclone.animate({
            top:$carqty.offset().top,
            width:100,
          }
          ,function(){
           imgclone.animate({ width:30,left:$carqty.offset().left},function(){

        var $cars=$('.headcar a.on i');
                  var $car1=$('.head-rl span').eq(1).find('i');
                  var cons=$cars.html()*1+1;
                  $cars.html(cons);$car1.html(cons);
              imgclone.remove();
             var xx=$('<li></li>').addClass('actives').html(gooda.map(
                function(item){
                  orderid=item.id;
                 
                 return`<img src="${oldimg[0].src}" alt="" />${item.name} 1 件 <span style='color:red;'>${item.price}</span>`
                }).join(''));
              xx.appendTo('.headcar div ul');
            
               var ord={
                  'id':orderid,
                  'name':'dy'
                }
               $.get('../api/order.php',ord,function(a){
              if(a=='suc'){
                console.log('ok')
              }
          })




             })
            }
           )
         

     })



  })

});