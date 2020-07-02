 // <![CDATA[
 try {
     window.addEventListener('load', function () {
         setTimeout(scrollTo, 0, 0, 1);
     }, false);
 } catch (e) {}
 // ]]>

 $(document).ready(function () {
     var swiper = new Swiper('.swiper-container', {
         slidesPerView: 3,
         spaceBetween: 20,
         freeMode: true,
         pagination: {
             el: '.swiper-pagination',
             clickable: true,
         },
     });

     $(window).scroll(function () {
         var now_scroll = $(window).scrollTop()
         var shop_top = $('.about').offset().top;

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

     var screenSize = $(window).width();
     var screenHeight = $(window).height();
     var current = false;

     $("#content").css('margin-top', screenHeight);

     if (screenSize > 768) {
         $("#videoBG").show();
         $("#imgBG").hide();
     }
     if (screenSize <= 768) {
         $("#videoBG").hide();
         $("#videoBG").attr('src', '');
         $("#imgBG").show();
     }

     $(window).resize(function () { //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
         screenSize = $(window).width();
         screenHeight = $(window).height();

         $("#content").css('margin-top', screenHeight);

         if (screenSize > 768 && current == false) {

             $("#videoBG").show();
             $("#videoBG").attr('src', 'images/color.mp4');
             $("#imgBG").hide();
             current = true;
         }
         if (screenSize <= 768) {
             $("#videoBG").hide();
             $("#videoBG").attr('src', 'images/0.jpg');
             $("#imgBG").show();
             current = false;
         }
     });


     $('.down').click(function () {
         screenHeight = $(window).height();
         $('html,body').animate({
             'scrollTop': screenHeight
         }, 1000);
     });

 })
