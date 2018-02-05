;require(['config'],function(){
    require(['jquery','headser'],function($){
       
         $('#header').load('../html/header.html #header',function(){
                   $('.headtop').next().hide();
                   $('.headfoot').hide();
                 });
         $('#footer').load('../html/footer.html .comfooter',function(){
            $('.cmf-t').hide();
         });

         





     })

});