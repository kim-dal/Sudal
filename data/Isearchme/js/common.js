$(document).ready(function(){

	/* headerOpen */
	$('.gnb').hover(function() {
		$('#header').addClass('open');
		$('#header .messagePop').removeClass('open');
		$('#header .dashboard').removeClass('open');
		$('#header .lang').removeClass('open');
	}, function(){
		$('#header').removeClass('open');
	});	

	$('.gnb > li').hover(function() {
		$(this).children('.depth1').addClass('on');
	}, function(){
		$(this).children('.depth1').removeClass('on');
	});

	$('.mGnb .depth1').click(function() {
		if( $(this).hasClass('open') ){
			$(this).removeClass('open');
		}else{
			$('.mGnb .depth1').removeClass('open');
			$(this).addClass('open');
		}
	});
	
	$('.mGnbOpen').click(function() {
		$('.mGnbWrap').addClass('open');
	});

	$('.mGnbWrap .close').click(function() {
		$('.mGnbWrap').removeClass('open');
	});

	$(document).mouseup(function (e){
		if($(".familyWrap").has(e.target).length === 0){
			$(".familyWrap").removeClass('open');
		}else{
			if( $(".familyWrap").hasClass('open') ){
				$(".familyWrap").removeClass('open');
			}else{
				$(".familyWrap").addClass('open');
			}
		}

		if($("#header .lang").has(e.target).length === 0){
			$("#header .lang").removeClass('open');
		}else{
			if( $('#header .lang').hasClass('open') ){
				$('#header .lang').removeClass('open');
			}else{
				$('#header .lang').addClass('open');
			}
		}

		if($("#header .dashboard").has(e.target).length === 0){
			$("#header .dashboard").removeClass('open');
		}else{
			if( $("#header .dashboard").hasClass('open') ){
				$("#header .dashboard").removeClass('open');
			}else{
				$("#header .dashboard").addClass('open');
			}
		}

		if($("#header .messagePop").has(e.target).length === 0){
			$("#header .messagePop").removeClass('open');
		}

	});

	$(window).on('scroll', function() {
		var cur_pos = $(window).scrollTop();

		if (cur_pos > 100 ) {
			$('#header').addClass('scroll');
		}else{
			$('#header').removeClass('scroll');		
		}
	});

	/* popup open */
	$('.popupOpen').click(function(){
		var popClass = $(this).attr('aria-controls');
		$("."+popClass).addClass('open');

		var ftHeight = $('#footer').outerHeight();

		$('body').css('overflow-y', 'scroll');
		$('#bodyArea').css({ 'position': 'fixed',
			'top': -$(document).scrollTop(),
			'left': 0,
			'width': '100%'
		});
		$('.inquiry').css({ 'position': 'absolute',
			'bottom': ftHeight,
			'left': 0,
			'width': '100%'
		});
		$('#footer').css({ 'position': 'absolute',
			'bottom': 0,
			'left': 0,
			'width': '100%'
		});

	});
	/* popup close */
	$('.popClose').on('click', function() {
		$(this).parents('.popup').removeClass('open');  
		
		var scrollPosition = Math.abs($('#bodyArea').css('top').split('px')[0]);
		$('body').css('overflow-y', 'auto');
		$('#bodyArea').removeAttr('style');
		$('.inquiry').css({ 'position': 'static',
			'bottom': 'auto',
			'left': 'auto',
			'width': 'auto'
		});
		$('#footer').css({ 'position': 'static',
			'bottom': 'auto',
			'left': 'auto',
			'width': 'auto'
		});
		$(window).scrollTop(scrollPosition);
	});
	$('.popupDim').on('click', function() {
		$(this).parents('.popup').removeClass('open'); 

		var scrollPosition = Math.abs($('#bodyArea').css('top').split('px')[0]);
		$('body').css('overflow-y', 'auto');
		$('#bodyArea').removeAttr('style');
		$('.inquiry').css({ 'position': 'static',
			'bottom': 'auto',
			'left': 'auto',
			'width': 'auto'
		});
		$('#footer').css({ 'position': 'static',
			'bottom': 'auto',
			'left': 'auto',
			'width': 'auto'
		});
		$(window).scrollTop(scrollPosition);
	});


	$('.listDelete').on('click', function() {
		$(this).parents('li').remove();
	});

	$('.listAllDelete').on('click', function() {
		$('.messagePop .List li').remove();
	});

	$('.listCheckDelete').on('click', function() {
		$('.messagePop .List li').not('.on').remove();
	});
	$('.messagePop .popClose').on('click', function() {
		$(this).parents('.messagePop').removeClass('open');
	});
})
