//header fixed
$( window ).scroll( function() {
	if ( $(this).scrollTop() > 1 ) {
		$('.header_wrap').addClass("resize");
	} else {
		$('.header_wrap').removeClass("resize");
	}
});
$( window ).scroll( function() {
	if ( $(this).scrollTop() > 1 ) {
		$('.sub_header_wrap').addClass("resize");
	} else {
		$('.sub_header_wrap').removeClass("resize");
	}
});

//menu
$(document).ready(function() {
	$('.menu_btn').click(function(e){
		$(".menu_wrap").addClass("open");
		//$('body').css({"overflow":"hidden"});
	});
	$('.menu_btn_close').click(function(e){
		$(".menu_wrap").removeClass("open");
		//$('body').css({"overflow":"auto"});
	});
});

// bottom download
$(document).ready(function(){
	$('a.toggle').click(function(){
		if($(".bottom_wrap").css("bottom")=="0px"){
			$(this).addClass("open");
			$(".bottom_wrap").addClass("open");
			return false;
		}else{
			$(this).removeClass("open");
			$(".bottom_wrap").removeClass("open");
			return false;
		}
	});
});

$(window).load(function(){
	if($(".download_slowmo").length > 0) {
		var scrollMove = function() {
			var scroll_Conts = $('.slow').offset().top,
			scroll_self = $('.download_slowmo').outerHeight();
			if($(window).scrollTop() > scroll_Conts && ($(window).scrollTop() + scroll_self) < $('.slow').offset().top) {
				$(".download_slowmo").css({display:"block"}, 1000);
			} else if($(window).scrollTop() > scroll_Conts && ($(window).scrollTop() + scroll_self) >= $('.lowlight').offset().top) {
				$('.download_slowmo').css({display: "none"}, 1000);
			} else if($(window).scrollTop() <= scroll_Conts){
				$('.download_slowmo').css({display:"block"}, 1000);
			}
		};
		var scroll_selfMove = function() {
			$(window).scroll(scrollMove);
			$(window).resize(scrollMove);
		}
		scroll_selfMove();
	}
});

//tab
$(document).ready(function(){
    $(".images_btn li").click(function(e){
        e.preventDefault();
        var list = $(this).index();
        $(".images_btn li").children("a").removeClass("on");
        $(".images_btn li").eq(list).children("a").addClass("on");
        $(".images_wrap > div").css({"height":"0px"});
        $(".images_wrap > div").eq(list).css({"height":"auto",});
    });
    $(".videos_btn li").click(function(e){
        e.preventDefault();
        var list = $(this).index();
        $(".videos_btn li").children("a").removeClass("on");
        $(".videos_btn li").eq(list).children("a").addClass("on");
        $(".videos_wrap > div").hide();
        $(".videos_wrap > div").eq(list).show();
    });
});

//zoom pop
$(document).ready(function() {
	$('.zoom_pop').click(function(e){
		$(".images_wrap .gallery_view").addClass("pop");
	});
	$('.zoom_pop_close').click(function(e){
		$(".images_wrap .gallery_view").removeClass("pop");
	});
});


$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

//lab
$(document).ready(function() {
	$('.videos a').click(function(e){
		$(".videos_wrap").addClass("open");
	});
	$('.videos_btn_close').click(function(e){
		$(".videos_wrap").removeClass("open");
		//$('body').css({"overflow":"auto"});
	});
});

//notice
$(document).ready(function() {
	$('.notice a').click(function(e){
		$(".notice_wrap").addClass("open");
	});
	$('.notice_btn_close').click(function(e){
		$(".notice_wrap").removeClass("open");
		//$('body').css({"overflow":"auto"});
	});
});


$(document).ready(function() {
	$('.faq li.dep1 > p').click(function(e) {
		$(e.target).closest('li').toggleClass( "on" );
		$(this).next().slideToggle(0).parent().siblings().children(".aswer").hide();
		$(this).parent().siblings().removeClass("on");
	});
});