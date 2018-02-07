;require(['config'],function(){
    require(['jquery'],function($){
         $('#footer').load('../html/footer.html .comfooter',function(){
            $('.cmf-t').hide();
         });
     function randomNumber(min,max){
             return parseInt(Math.random()*(max-min+1)) + min
        }
        var senddata={};var vok=[0,0,0]
        var  vcodes=$('.vcodes')
        var inputs=$('.logins input');
        var $h2ac=$('h2.active')
            inputs.eq(0).blur(function(){
        var name=inputs.eq(0).val().trim();
        var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
            if(reg.test(name)){
                 $h2ac.hide().html('');
                 senddata['name']=name;
                 vok[0]=1;
            }else{
                $h2ac.show().html(('手机号码格式不对'));
                  vok[0]=0;
            }  ; //true
                
            })
        inputs.eq(1).blur(function(){
             var psw=inputs.eq(1).val().trim();
             if(!psw){
                 $h2ac.show().html('密码不能为空');
                  vok[1]=0;
             }else{
                $h2ac.show().html('');
                  senddata['psw']=psw;
                  vok[1]=1;
             }
            
        })
         inputs.eq(2).blur(function(){
             let vcods=inputs.eq(2).val().trim();
             if(vcods==vcodes.html()){
                $(this).closest('.yzm').find('i').addClass('suc')
                 vok[2]=1;
             }else{
                 $(this).closest('.yzm').find('i').addClass('err');
                  vok[2]=0;
             }
         })

            var $loginbutton=$('button');
                $loginbutton.eq(0).on('click',function(){
                    let num=randomNumber(0,2)
                   
                    var arrvcode=['../imgaes/vcode1.png','../imgaes/vcode2.png','../imgaes/vcode3.png'];
                    var arrvo=['ugel','6rnh','2982']
                   
                    $loginbutton.eq(0).prev().attr({'src':arrvcode[num]})
                  
                    
                })
             $loginbutton.eq(1).on('click',function(){ 
                
                var bcode=0;
                    for(let i=0;i<vok.length;i++){
                       bcode+=vok[i]
                    }
                   if(bcode==3){
                        console.log(senddata)
                        
                        $.post('../api/reg.php',senddata,cb);
                        function cb(a){
                            console.log(a)
                           if(a=='suc'){
                                if($("input[type='checkbox']").is(':checked')){

                                          document.cookie="name="+senddata['name'];  
                                     }
                            location.href = '../index.html ?'+senddata['name'];

                           }else{
                            alert('登录/注册失败');
                           }

                        }
                   }

             })
         
       })

});