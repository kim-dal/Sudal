
	$(document).ready(function() {	
		
		$(window).scroll(function(){
			const scrollTop = $(window).scrollTop();
			const wWidth = $(window).width();
			if( wWidth => 768){
				if( scrollTop > 200 ){
					$('header').addClass('scroll');
				}else{
					$('header').removeClass('scroll');		
				};
			};
		});


		const kvSwiper = new Swiper(".kvWrap", {
			slidesPerView: 1,
			loop: true,
			loopAdditionalSlides : 1,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.kvWrap .swiper-button-next',
				prevEl: '.kvWrap .swiper-button-prev',
			},
			pagination: {
				el: '.kvWrap .swiper-pagination',
				clickable: true,
				type: 'bullets',
			}
		});

		$(".kvWrap .swiper-button-pause").click(function(){
			$(this).css({display:'none'});
			$('.kvWrap .swiper-button-play').css({display:'block'});
			kvswiper.autoplay.stop();
		});
		$(".kvWrap .swiper-button-play").click(function(){
			$(this).css({display:'none'});
			$('.kvWrap .swiper-button-pause').css({display:'block'});
			kvswiper.autoplay.start();
		});

		const noticeSwiper = new Swiper(".noticeList", {
			loop: false,
			navigation: {
				nextEl: '.noticeList .swiper-button-next',
				prevEl: '.noticeList .swiper-button-prev',
			},
			pagination: {
				el: '.noticeList .swiper-pagination',
				type: 'progressbar',
			},
			breakpoints: {
			  1320: {
				slidesPerView: 3,  //브라우저가 1024보다 클 때
				spaceBetween: 50,
			  },
			  768: {
				slidesPerView: 2.5,  //브라우저가 1024보다 클 때
				spaceBetween: 40,
			  },
			  0: {
				slidesPerView: 1.5,  //브라우저가 768보다 클 때
				spaceBetween: 20,
			  },
			},
		});

		let lastTop = 0;
		let isVisible = false;

		$(window).scroll(function () {
			let windowWidth = $(window).width();
			if(windowWidth > 768){
				let positionTop = $(this).scrollTop();
				let movingPosition = $('#content').offset().top - $('header').outerHeight();
				
				if (positionTop > lastTop) {
					if ( positionTop <= movingPosition && !isVisible){
						$('html,body').animate({ scrollTop:movingPosition }, 500);
						isVisible = true;
					}else{
					};
				} else if(positionTop < movingPosition){
					isVisible = false;				
				}		

				lastTop = positionTop;
				console.log(positionTop, movingPosition, lastTop)
			}
		}); 

	});
	
	$(document).on('click', '.tabWrap li', function(){
		let num = $(this).index();
		$('.noticeListWrap > div').removeClass('open');
		$('.tabWrap li').removeClass('open');
		$('.noticeListWrap > div').eq(num).addClass('open');
		$('.tabWrap li').eq(num).addClass('open');
	});


	