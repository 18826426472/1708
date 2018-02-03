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
     })($);
    })
});