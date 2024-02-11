$(document).ready(function(){
     $(".menu_open").click(function(){
		$(this).css('display','none');
		$('.menu_close').css('display','block');
		$(".m_nav").css("height", "100%");
    }); 
	$(".menu_close").click(function(){
		$(this).css('display','none');
		$('.menu_open').css('display','block');
		$(".m_nav").css("height", "0");
    });
});