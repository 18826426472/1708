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
        var customname={'name':'dy'};
        var arrs=[];
        if(customname['name']){
           
            $.get('../api/car.php',customname,function(a){

                    a=JSON.parse(a);
                     arrs=[];
                    a.map(function(item){
                        
                        item[0].qty=item[1];
                        item[0].weight=2;
                        arrs.push(item[0])
                    })
                  cb(arrs);
            })
        }else{

            $.getJSON('../api/carlist.json',cb);

            
        }
        function cb(a){
           var allsqty=0;
           // var toprice=0;var weight=0,toweight=0,toqty=0;
            $carul.html(a.map(function(item){
                allsqty+=item.qty*1;
                var weight=item.weight*item.qty;
                var toprice=item.price*item.qty;
                toweight+=weight;
                 toqty+=toprice;
                 len++;
                 
                return` <li data-id='${item.id}'>
                    <input type="checkbox" />
                    <img src=".${item.imgurl}" />
                    <a href="">${item.name} <i>${item.title}${item.weight}kg*${item.qty}件</i></a>
                    <span>${weight}kg</span><span style='color:red;'>${item.price}</span>
                    <button>-</button><i>1</i><button>+</button><span style='color:red;'>${toprice}</span>
                    <em><i>移入收藏</i><br /><i>删除</i></em>
                 </li>`
            }).join(''))
                
                var $cars=$('.headcar i');
                  var $car1=$('.head-rl span').eq(1).find('i');
                  var cons=allsqty;
                  $cars.html(cons);$car1.html(cons);
            var $allqty=$('.mbotc p i');
            console.log(toweight,toqty)
            $allqty.html(len).next().html(toweight).next().html(toqty);
            $allqty.closest('.mbotc').find('p').eq(2).find('span').html(toqty);
           
           

        }
        var ttop=$carul.offset().top+$('.mainbottom').height();
       
        $(window).scroll(function(){

            var sTop=$(document).scrollTop();
           
            if(sTop>50&&sTop<ttop-200){
                $('.mainbottom').addClass('active');
            }else{
                 $('.mainbottom').removeClass('active');
            }
        })


      
       $carul.on('click','li em i',function(){
        
            if($(this).index()==2){
              var ind=$(this).closest('li')[0].dataset.id;
              
                $(this).closest('li').remove();
            }
            var datas={
              "name":'dy',
              "id":ind

            }
          $.get('../api/car.php',datas,function(a){
              console.log(a)
                a=JSON.parse(a);
                  arrs=[];
                    a.map(function(item){
                        
                        item[0].qty=item[1];
                        item[0].weight=2;
                        arrs.push(item[0])
                    })
                    console.log(arrs);
                  // cb(arrs);


          })


       })

     })

});