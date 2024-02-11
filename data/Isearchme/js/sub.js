$(document).ready(function(){
	
	$('.faqList dt').click(function(){
		if( $(this).hasClass('on') ){
			$(this).removeClass('on');
		}else{
			$('.faqList dt').removeClass('on');
			$(this).addClass('on');
		}
	});

	$('.upload .logoList li').click(function(){
		if( $(this).hasClass('on') ){
			$(this).removeClass('on');
		}else{
			$('.upload .logoList li').removeClass('on');
			$(this).addClass('on');
		}
	});

	$('.profile .openCareer').click(function(){
		if( $(this).hasClass('open') ){
			$(this).removeClass('open');
		}else{
			$(this).addClass('open');
		}
	});
			
	$('.use .nav li a').click(function(){
		var nowEq = $(this).parents('li').index();
		var innerText = $(this).next('p').text();

		$('.use .nav li a').removeClass('on');
		$(this).addClass('on');

		$('.use .box .title span').html(innerText.slice(-10))

		console.log(innerText.slice(-10))

		$('.use .box .text').removeClass('on');
		$('.use .box .text').eq(nowEq).addClass('on');
	});		
	
	$('.survayTab li').click(function(){
		var nowEq = $(this).index();

		$('.survayTab li').removeClass('on');
		$(this).addClass('on');

		$('.survayList > .box').removeClass('on');
		$('.survayList > .box').eq(nowEq).addClass('on');
	});	


	
})