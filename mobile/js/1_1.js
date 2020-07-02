$(document).ready(function () {

    var cnt = 2;
    $('.contlist:eq(0)').show();
    $('.tab1').addClass('now');

    $('.tab').each(function (index) {
        $(this).click(function () {
            $(".contlist").hide();
            $(".contlist:eq(" + index + ")").show();

            for (var i = 1; i <= cnt; i++) { //1,2,3 
                $('.tab' + i).removeClass('now')
            }
            $(this).addClass('now')
        });
    });

    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
    });
})
