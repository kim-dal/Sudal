
	$(document).ready(function() {	
		 
		$('.imgScroll').scroll(function() {
			$(this).find('i').css('display','none');
		});
	});

	
	
	$(document).on('click', '.tabWrap li', function(){
		let num = $(this).index();
		$('.tabConWrap > div').removeClass('open');
		$('.tabWrap li').removeClass('open');
		$('.tabConWrap > div').eq(num).addClass('open');
		$('.tabWrap li').eq(num).addClass('open');
	});