$(document).ready(function(){ 
	$('.popup-open').click(function(){
		$('.popup').addClass('on');
		$('body').addClass('noScroll');
					
	});

	$('.popup .popup-close').click(function(){
		$(this).parents('.popup').removeClass('on');
		$('body').removeClass('noScroll');
    });

	$('.popup .dim').click(function(){
		$(this).parents('.popup').removeClass('on');
		$('body').removeClass('noScroll');
    });
	
	$('.thumnailList >  div').click(function() {
		var imgIndex = $(this).index();
		var imgSrc = $(this).children('img').attr('src');
		$('.thumnailList > div').removeClass('on');
		$(this).addClass('on');
		$('.thumnail img').attr("src", imgSrc );
	});
    
	$('.selectBox .selected').click(function(){
		if( $(this).parents('.selectBox').hasClass('on') ){
			$(this).parents('.selectBox').removeClass('on');
		}else{
			$(this).parents('.selectBox').addClass('on');			
		}
	});

	$(document).mouseup(function (e){
		var index = $(".selectBox");
		if( index.has(e.target).length === 0 ){
			index.removeClass('on');
		}
	});

	$(window).scroll(function(){
		var windowTop = $(window).scrollTop();
		if( windowTop > 0 ){
			$('.header').addClass('scrollDown');
		}else {  
			$('.header').removeClass('scrollDown');			
		}
	});
	
	
	$('.fullsreen-open').click(function(){
		$('.fullsreenWrap').addClass('on');
		$('.fullsreenList').slick('setPosition');
	});

	$('.fullsreenWrap .fullsreen-close').click(function(){
		$(this).parents('.fullsreenWrap').removeClass('on');
    });
	
	$('.fullsreenList').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight:true, 
		prevArrow:$('.fullsreenWrap .prev'),
		nextArrow:$('.fullsreenWrap .next'),
	});
});

