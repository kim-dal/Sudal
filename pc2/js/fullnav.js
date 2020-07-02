   $(document).ready(function () {


       $('.downmenu').hover(
           function () {
               $('.downmenu li.menu ul').fadeIn('normal', function () {
                   $(this).stop();
               });
               $('.headerInner').animate({
                   height: 155
               }, 'fast').clearQueue();
           },
           function () {
               $('.downmenu li.menu ul').fadeOut('fast');
               $('.headerInner').animate({
                   height: 50
               }, 'fast').clearQueue();
           });

       //tab키처리
       $('.downmenu li.menu .depth1').on('focus', function () {
           $('.downmenu li.menu ul').slideDown('fast');
           $('.headerInner').animate({
               height: 155
           }, 'fast').clearQueue();
       });

       $('.downmenu li.m4 li:last').find('a').on('blur', function () {
           $('.downmenu li.menu ul').slideUp('fast');
           $('.headerInner').animate({
               height: 50
           }, 'fast').clearQueue();
       });
       
       

   });
