$(document).ready(function () {
    $('.story_r .btn .abtn').click(function () {
        var a = $(this).attr('data-index')
        var b = $(this).index()
        console.log(b)
        if (a == 1) {
            $('.story_wrap').animate({
                left: -870
            })
            $('.story_r .btn .abtn').removeClass('action')
            $('.story_r .btn .abtn').eq(b).addClass('action')
            $('.story_r .move_btn > span').eq(b).addClass('action')
        } else {
            $('.story_wrap').animate({
                left: 0
            })
            $('.story_r .btn .abtn').removeClass('action')
            $('.story_r .btn .abtn').eq(b).addClass('action')
            $('.story_r .move_btn > span').eq(b).addClass('action')
        }
    });
    movieBannerStart();
    $(window).scroll(function () {
        $('.hideme').each(function (i) {
            var top_of_object = $(this).offset().top - 800;
            var top_of_window = $(window).scrollTop();
            /* 3 */
            if (top_of_window > top_of_object) {
                $(this).animate({
                    'opacity': '1'
                }, 1000);
            }
        });
        $('.fadeinleft').each(function (i) {

            var top_of_element = $(this).offset().top - 800;
            var top_of_window = $(window).scrollTop();

            if (top_of_window > top_of_element) {
                $(this).animate({
                    'opacity': '1',
                    'margin-left': '0px'
                }, 1000);
            }
        });
    })
});


var movieNum = 0;

function movieBanner() {
    movieNum++
    if (movieNum == '3') {
        movieNum = '0'
    }
    $(".banner").eq(movieNum).css("opacity", "1");
    $(".banner").not($(".banner").eq(movieNum)).css("opacity", "0");
    $(".btn span").eq(movieNum).addClass('now');
    $(".btn span").not($(".btn span").eq(movieNum)).removeClass('now');
}

function movieBannerStart() {
    bannerRolling = setInterval(function () {
        movieBanner();
    }, 3000);
}

function movieBannerRollingStop() {
    clearInterval(bannerRolling);
}

function bannerIconOver(obj) {
    movieBannerRollingStop();
    $(".banner").eq(obj).css("opacity", "1");
    $(".banner").not($(".banner").eq(obj)).css("opacity", "0");
    $(".btn span").eq(obj).addClass('now');
    $(".btn span").not($(".btn span").eq(obj)).removeClass('now');
}
