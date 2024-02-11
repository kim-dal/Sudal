	
$(document).ready(function(){
	
	$('.popCloseBtn').click(function () {
		const popName = $(this).attr('data-popup');
		$(".pop"+"."+popName).removeClass('open');
	});

	$('.pop .dim').click(function () {
		$(this).parents('.pop').removeClass('open');
	});

	$('.menuPop dt').click(function () {
		if( $(this).parents('dl').hasClass('open') ){
			$(this).parents('dl').removeClass('open');
		}else{
			$('.menuPop dl').removeClass('open');
			$(this).parents('dl').addClass('open');
		}
	});
});

$(document).on('click', 'a[aria-haspopup="true"]', function(){
	let popName = $(this).attr('id');
		
	if( popName === 'menuPop') {
		$('header').addClass('open');
		$('header .menuOpen').css('display','none');
		$('header .menuClose').css('display','block');
	}
	$(".pop"+"."+popName).addClass('open');
});

$(document).on('click', '.popClose', function(){
	let popName = $(this).attr('data-popup');

	if( popName === 'menuPop'){	
		$('header').removeClass('open');
		$('header .menuOpen').css('display','block');
		$('header .menuClose').css('display','none');
	}
	$(".pop"+"."+popName).removeClass('open');
});

$(document).on('click', '.pop .dim', function(){
	let popName = $(this).attr('data-popup');
		
	if( popName === 'menuPop') {
		$('header').removeClass('open');
		$('header .menuOpen').css('display','block');
		$('header .menuClose').css('display','none');
	}
	$(".pop"+"."+popName).removeClass('open');
});

$(document).on('click', '.dimmed', function(){
	closeYoutube();
});


$(document).on('click', '.goTop', function(){
	$('html,body').animate({ scrollTop:0 }, 500);
});