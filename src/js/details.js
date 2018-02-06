;require(['config'],function(){
    require(['jquery','headser','gdsZoom'],function($){
       
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

           $.getJSON('../api/good.json',cb);
           function cb(a){
              console.log(a)
           }
      var $binimg=$('.maintl .bigimg');
     
     
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


       var $hotsale=$('.hotsale ul');
        $.getJSON('../api/hotsales.json',cb);
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

         $.getJSON('../api/good.json',cbs);
         function cbs(a){
         
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
          $maintrs.eq(1).html(a[0].saleqty);
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
        console.log($floor.index())
        var indexs=$floor.index();
        if(indexs==-1){
          indexs=2;
        }
       $('.mainc-cr h4').find("span").eq(indexs-1).addClass("active").siblings().removeClass("active");
            
            
    




            })


  })

});