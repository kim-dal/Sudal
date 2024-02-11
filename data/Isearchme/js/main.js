$(document).ready(function(){
	
	$('.faqWrap dt').click(function(){
		if( $(this).hasClass('on') ){
			$(this).removeClass('on');
		}else{
			$('.faqWrap dt').removeClass('on');
			$(this).addClass('on');
		}
	});
})