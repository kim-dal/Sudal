	
$(document).ready(function(){
	$('a[aria-haspopup="true"]').click(function () {
		const popName = $(this).attr('pop-id');
		$(".pop"+"."+popName).addClass('open');
	});

	$('.popClose').click(function () {
		const popName = $(this).attr('data-popup');
		$(".pop"+"."+popName).removeClass('open');
	});
	
	$('.popCloseBtn').click(function () {
		const popName = $(this).attr('data-popup');
		$(".pop"+"."+popName).removeClass('open');
	});

	$('.pop .dim').click(function () {
		$(this).parents('.pop').removeClass('open');
	});

});

$(document).on('click', '.goTop', function(){
	  $('html, body').animate({
		scrollTop : 0
	}, 500);
});