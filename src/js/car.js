;require(['config'],function(){
    require(['jquery','headser'],function($){
       
         $('#header').load('../html/header.html #header',function(){
                   $('.headtop').next().hide();
                   $('.headfoot').hide();
                 });
         $('#footer').load('../html/footer.html .comfooter',function(){
            $('.cmf-t').hide();
         });
        var $carul=$('#main ul');
        var toqty=0,toweight=0,len=0;
        $.getJSON('../api/carlist.json',cb);
        function cb(a){
            $carul.html(a.map(function(item){
                var weight=item.weight*item.qty;
                var toprice=item.price*item.qty;
                toweight+=weight;
                 toqty+=toprice;
                 len++;
                return` <li>
                    <input type="checkbox" />
                    <img src="${item.img1}" />
                    <a href="">${item.name} <i>${item.title}</i></a>
                    <span>${weight}kg</span><span style='color:red;'>${item.price}</span>
                    <button>-</button><i>1</i><button>+</button><span style='color:red;'>${toprice}</span>
                    <em><i>移入收藏</i><br /><i>删除</i></em>
                 </li>`
            }).join(''))
            var $allqty=$('.mbotc p i');
            $allqty.html(len).next().html(toweight).next().html(toqty);
            $allqty.closest('.mbotc').find('p').eq(2).find('span').html(toqty);
           
           

        }
        var ttop=$carul.offset().top+$('.mainbottom').height();
        console.log(ttop);
        $(window).scroll(function(){

            var sTop=$(document).scrollTop();
            console.log(sTop)
            if(sTop>50&&sTop<ttop-200){
                $('.mainbottom').addClass('active');
            }else{
                 $('.mainbottom').removeClass('active');
            }
        })




     })

});