;(function($){
	// $.prototype.lxCarousel = function(options){
	$.fn.lxCarousel = function(options){
		var defaults = {
			// 宽高
			width:800,
			height:360,

			autoPlay:true,

			// 默认索引值
			index:0,

			// 页码与左右按钮
			page:true,
			pages:false,
			buttons:false,
			// 轮播类型
			type:'vertical',//horizontal,seamless,fade,

			duration:3000

		}

		
		this.each(function(idx,ele){
			var $self = $(ele);
			var opt = $.extend({},defaults,options);
			// 这里的this：实例$('#box')
			// console.log(options)
			

			// 添加特定类
			$self.addClass('lx-carousel');

			// 设置基础样式
			$self.css({
				width:opt.width,
				height:opt.height
			})

			var lx = {
				init:function(){
					var $ul = $('<ul/>');
					if(opt.type=='horizontal'){
						opt.imgs.push(opt.imgs[0]);
						// console.log(opt.imgs);
					}
					$ul.html(opt.imgs.map(function(url){
						return '<li><img src="'+ url +'"></li>'
					}).join(''));

					// 把ul写入页面
					$self.append($ul);
					if(opt.type=='horizontal'){
						$ul.css({position:'absolute',height:opt.height,width:opt.imgs.length*opt.width}).find('li').addClass('horizontal');
						// console.log(opt.imgs);
					}
					if(opt.buttons){
						$('<span/>').addClass('btn-prev').html('&lt;').appendTo($self);
						$('<span/>').addClass('btn-next').html('&gt;').appendTo($self);
					}

					// 移入移除
					$self.hover(function(){
						clearInterval($self.timer);
					},function(){
						lx.move();
					}).on('click','.btn-prev',()=>{
						opt.index--;
						// console.log(opt.index);
						if(opt.type=='horizontal'&&opt.index<0){
							// console.log($ul,opt.len);
							$ul.css({left:-opt.len*opt.width})
						}
						this.showpage();
						lx.show();
					}).on('click','.btn-next',()=>{
						opt.index++;
						// console.log(opt.index);
						this.showpage();
						lx.show();
					})
					opt.len =opt.type=='horizontal'?opt.imgs.length-1:opt.imgs.length;
					// console.log(opt.len);
					if(opt.page){
						var $page=$('<p/>').appendTo($self).addClass('page');
						for(let i=0;i<opt.len;i++){
							$('<span/>').html(i+1).appendTo($page);
						}
					// if(opt.pages){
					// 	$page.find('span').css({position:'absolute'});
					// 	console.log(666);
					// }
						$page.find('span').eq(opt.index).addClass('active');
						// console.log(this.showpage)
		
						$page.on('mouseenter','span',function(){

							opt.index=$(this).html()-1;
							lx.showpage();
							lx.show();
						})
					}

					this.show();
					this.move();


					return this;
				},
				move:function(){
					$self.timer = setInterval(function(){
						opt.index++;
						// console.log(opt.index,opt.len);
					
						this.showpage();
				
						this.show();
					}.bind(this),opt.duration);

					return this;
				},
				show:function(){
					// 处理index
					if(opt.type=='horizontal'){
						if(opt.index>opt.len){
							opt.index = 0;
						}else if(opt.index<0){
							opt.index = opt.len-1;
						}

					}
					else{

						if(opt.index>=opt.len){
							opt.index = 0;
						}else if(opt.index<0){
							opt.index = opt.len-1;
						}
					}

					var $ul = $self.find('ul');

					// 动画
					if(opt.type=='vertical'){
						$ul.animate({top:-opt.index*opt.height});
					};
					if(opt.type=='fade'){
						// console.log(opt.index);
						$ul.css({width:opt.width,height:opt.height});
						// $ul.find('img').stop();
						$ul.find('img').css({position:'absolute'}).fadeOut(600).eq(opt.index).fadeIn(1000);
						// console.log()
						// $ul.css({top:-opt.index*opt.height})
					};
					if(opt.type=='horizontal'){
						// opt.imgs.push(opt.imgs[0]);
						let callback='';
						if(opt.index>=opt.len){
							callback=function(){
								$ul.css({left:0});
								opt.index=0;
							};
						// if(opt.index<0){
						// 	callback=function(){
						// 		console.log(111);
						// 	}
						// }
						}
						// console.log(opt.index);
						$ul.animate({left:-opt.index*opt.width},callback);
					}

					return this;
				},
				showpage:function(){
						if(opt.page){
						// let optLen=opt.len;
						// if(opt.type=='horizontal'){
						// // opt.imgs.push(opt.imgs[0]);
						// optLen=opt.len-1;
						// }
						if(opt.index==opt.len){
							$self.find('p span').eq(0).addClass('active').siblings().removeClass('active');
						}
						$self.find('p span').eq(opt.index).addClass('active').siblings().removeClass('active');
						if(opt.pages){
							var $moveSpan=$self.find('p span.active');
							console.log($moveSpan);
							// $moveSpan.css({position:'relative'});
							$moveSpan.siblings().css({width:30,marginBottom:0,marginTop:30});
							$moveSpan.animate({width:40,height:30,marginBottom:30,marginTop:0});
							// .siblings().css({marginTop:30});
						}
					}
				}
			}

			lx.init();
		})

		

		return this;
	}

	// $.fn.extend({
	// 	lxCarousel(){},

	// })
})(jQuery);
