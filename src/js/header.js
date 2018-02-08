$(function($){
    
    $('.all-goods .item').hover(function(){

        $(this).addClass('active').find('s').hide();

        $(this).find('.product-wrap').show();

    },function(){

        $(this).removeClass('active').find('s').show();

        $(this).find('.product-wrap').hide();

    });
    var $loc=$('.location');
    var $locs=$('.locations');
    var times;
    $loc.on('mouseenter',function(){
        clearTimeout(times)
        $locs.show().addClass('active');   
    }).mouseleave(function(event) {
       times=setTimeout(()=>{
            $locs.hide()
            
        },50)
    });
    var $headcar=$('.headcar');
    $headcar.hover(function(){
        console.log(1112)
        $headcar.addClass('active')
        $headcar.find('div').show();
    }).mouseleave(function(){
         $headcar.find('div').hide();
         $headcar.removeClass('active')
    })
    $gotop=$('.gtop');
   
    $gotop.on('click',function(){
        $("body,html").animate({
        "scrollTop": 0
    }, 500);
    })

    var params = location.search;//'?id=g001'
    params = params.slice(1);
    if(params){
     var $tologin=$('.tologin');
      $('.tologin').find('span').html(params);
      $tologin.on('click',function(){
        return false;
      })
        
    }
  var $spans=$(".nav-list li");
    $spans.on('click',function(){
       if(0<$(this).index()&&$(this).index()<8){

        location.href="http://localhost:8051/html/list.html ?dog"
       };
       if($(this).index()==0){
        location.href="http://localhost:8051/index.html"
       }
       if($(this).index()==9){
         location.href="http://localhost:8051/html/car.html"
       }
      
       return false;
    })
     var customname={'name':'dy'};
        var arrs=[];
        if(customname['name']){
           
            $.get('../api/car.php',customname,function(a){
                    a=JSON.parse(a);
                    a.map(function(item){
                        
                        item[0].qty=item[1];
                        item[0].weight=2;
                        arrs.push(item[0])
                    })
                 
                  var allqy=0;
                  var cons=arrs.map(function(item){
                    allqy+=item.qty*1;
                    return` <li>
                    
                    <img src=".${item.imgurl}" />
                    <a href="">${item.name} <i>${item.qty}</i></a>
                   <span style='color:red;'>${item.price}</span>
                
                    
                 </li>`
                  }).join('');
                
                  var $carsul=$('.headcar div ul');
                  $carsul.html(cons)
                  var $cars=$('.headcar a.on i');
                  var $car1=$('.head-rl span').eq(1).find('i');
                 
                  $cars.html(allqy);
                  $car1.html(allqy);



            })

         }   

 
})
