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
 
})
