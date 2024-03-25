

	 //	Youtube
	function playYoutube(youtube_id) {
		$(".dimmed").show();
		$("<div class='youtube_popup'></div>").prependTo(".dimmed");
		$(".youtube_popup").html("<div id='youtube_player'></div>");
		$("#youtube_player").html("<a href='javascript:void(0)' class='youtube_close'>닫기</a><iframe allowfullscreen='' frameborder='0' src='https://www.youtube.com/embed/"+ youtube_id +"'></iframe>");
	}
	
	 function closeYoutube() {
		$(".youtube_popup").html("").remove();
		$(".dimmed").fadeOut("fast");
	}
		 
	$(document).ready(function(){
		$(".dimmed").click(closeYoutube);
		
		$('.popupOpen').click(function(){
			var popID = $(this).attr('popID');
			$(".popup"+"."+popID).addClass('on');
			$("body").addClass('scrollLock');
		});

		$('.popup .popupClose').click(function(){
			$(this).parents('.popup').removeClass('on');
			$("body").removeClass('scrollLock');
		});
		$('.popup .popupCloseBtn').click(function(){
			$(this).parents('.popup').removeClass('on');
			$("body").removeClass('scrollLock');
		});
		$('.popup .dim').click(function(){
			$(this).parents('.popup').removeClass('on');
			$("body").removeClass('scrollLock');
		});

		$('.share dt').click(function(){
			if( $('.share').hasClass('open') ){
				$('.share').removeClass('open');
			}else {
				$('.share').addClass('open');		
			}
		});
	});
	$(document).on("click", ".youtube_close", function (e) {
		closeYoutube();
	});





