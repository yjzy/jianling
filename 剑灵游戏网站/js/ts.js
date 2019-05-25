
		// 大图展示效果
		$(function(){
			$('#ost_go').mouseover(function(){
				$('#ost_d').css("display","block");
			});
			$('#ost_go').mouseout(function(){
				$('#ost_d').css("display","none");
			});

		})


		$(function(){
			$('.game').mouseover(function(){
				$('.box').css("display","block");
			});
			$('.box').mouseover(function(){
				$(this).css("display","block");
			});
			$('.box').mouseout(function(){
				$('.box').css("display","none");
			});

		// 小图展示
		$(function(){
			$('#item').mouseover(function(){
				$('.first-o').css("display","none");
				$('#item-a').slideDown();
			});
			$('#item-a').mouseout(function(){
				$(this).css("display","none");
				$('.first-o').css("display","block");
			});
		})



		$(function(){
		$('#i').mouseover(function(){
				$('.first-t').css("display","none");
				$('#i-a').slideDown();
			});
			$('#i-a').mouseout(function(){
				$('#i-a').css("display","none");
				$('.first-t').css("display","block");
			});
		})

		$(function(){
			$('#aaaa').mouseover(function(){
				$('.first-f').css("display","none");
				$('#bbbb').slideDown();
			});
			$('#bbbb').mouseout(function(){
				$('#bbbb').css("display","none");
				$('.first-f').css("display","block");
			});
		})

		$(function(){
			$('#qqq').mouseover(function(){
				$('.first-f').css("display","none");
				$('#www').slideDown();
			});
			$('#www').mouseout(function(){
				$('#www').css("display","none");
				$('.first-f').css("display","block");
			});
		})

	})