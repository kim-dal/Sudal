 $(document).ready(function() {
       
	$('p.que').on('click', function () {
			
		if ($(this).hasClass('on')) {
			slideUp();
		} else {
			slideUp();
			$(this).addClass('on').next().slideDown('fast');
			$(this).find('.icon').attr('src','images/up.png');
		}
	
		function slideUp() {
			$('p.que').removeClass('on').next().slideUp('fast');
			$('.icon').attr('src','images/down.png');
		};
			
	})
});