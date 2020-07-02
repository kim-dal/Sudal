// <![CDATA[
try {
    window.addEventListener('load', function () {
        setTimeout(scrollTo, 0, 0, 1);
    }, false);
} catch (e) {}
// ]]>

$(document).ready(function () {

    //메뉴버튼 클릭시
    $(".btn").click(function () {

        var documentHeight = $(document).height();
        $(".box").css('height', documentHeight);
        $("#gnb").css('height', documentHeight);

        $("#gnb").animate({
            right: 0,
            opacity: 1
        }, 'slow');
        $(".box").show();
    });

    //닫기버튼 클릭시
    $(".box,.mclose").click(function () {
        $("#gnb").animate({
            right: '-100%',
            opacity: 0
        }, 'fast');
        $(".box").hide();
    });

    var onoff = [false, false, false, false];
    var arrcount = onoff.length;

    //뎁스1 선택 시
    $('#gnb .depth1 h3>a').click(function () {
        var ind = $(this).parents('.depth1').index();
        if (onoff[ind] == false) {
            $(this).parent('h3').next('ul').slideDown('slow');
            $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');
            for (var i = 0; i < arrcount; i++) onoff[i] = false;
            onoff[ind] = true;

        } else {
            $(this).parent('h3').next('ul').slideUp('fast');
            onoff[ind] = false;
        }
    });




    //스크롤이벤트
    $(window).scroll(function (e) {
        var now_scroll = $(window).scrollTop()

        if (now_scroll > 170) {
            $('#headerArea').css({
                backgroundColor: 'rgba(255,255,255,1)',
                boxShadow: '0 3px 7px 1px rgba(0, 0, 0, 0.1)'
            })
        } else {
            $('#headerArea').css({
                backgroundColor: 'rgba(255,255,255,0)',
                boxShadow: '0 3px 7px 1px rgba(0, 0, 0, 0.0)'
            })
        }



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

        if (now_scroll > 400) {
            $('#fotterArea .top_btn a').css({
                opacity: 1
            })
        } else {
            $('#fotterArea .top_btn a').css({
                opacity: 0
            })
        }
    })
})
