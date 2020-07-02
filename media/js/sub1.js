 // <![CDATA[
 try {
     window.addEventListener('load', function () {
         setTimeout(scrollTo, 0, 0, 1);
     }, false);
 } catch (e) {}

 // ]]>

 $(document).ready(function () {
     $('.popup-youtube').magnificPopup({
         disableOn: 320,
         type: 'iframe',
         mainClass: 'mfp-fade',
         removalDelay: 160,
         preloader: true,

         fixedContentPos: false
     });


     $(window).scroll(function () {
         var now_scroll = $(window).scrollTop()
         var shop_top = $('#content').offset().top;

         //  헤더 스트롤 이벤트
         if (now_scroll > shop_top) {
             $('#headerArea').css({
                 backgroundColor: 'rgba(0,0,0,.85)',

             })

         } else {
             $('#headerArea').css({
                 backgroundColor: 'rgba(0,0,0,.5)',

             })

         }

         //객체 스크롤 이벤트
         $('.scroll_hide').each(function (i, ee) {
             var hide_top = $('.scroll_hide').eq(i).offset().top;
             var hide_height = $('.scroll_hide').eq(i).outerHeight();
             var bottom_of_window = $(window).scrollTop() + $(window).height();

             if (bottom_of_window > hide_top + (hide_height / 2)) {
                 $('.scroll_hide').eq(i).animate({
                     'opacity': '1',
                 }, 1000);

             }
         });

     })

     $(".menuOpen").toggle(function () {
         $(".mainMenu").slideDown('slow');
     }, function () {
         $(".mainMenu").slideUp('fast');
     });

     var current = 0;
     $(window).resize(function () {
         var screenSize = $(window).width();
         if (screenSize > 768) {
             $(".mainMenu").show();
             current = 1;
         }
         if (current == 1 && screenSize < 768) {
             $(".mainMenu").hide();
             current = 0;
         }
     });

 });
