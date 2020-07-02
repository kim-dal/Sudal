$(document).ready(function () {
    $(function () {
        $('.content').load("9_sub1.html");
        // 서버에서 구동하는 메소드

        $('.sub_nav .btnLoad1').click(function () {
            $('.content').load("9_sub1.html");
            $(".btnLoad2").removeClass("now")
            $(".btnLoad1").addClass("now")
        });
        $('.sub_nav .btnLoad2').click(function () {
            $('.content').load("9_sub2.html");
            $(".btnLoad1").removeClass("now")
            $(".btnLoad2").addClass("now")
        });
    });

    $('tr.title').on("click", function () {
        $('tr.text').addClass("on");

//        $(this).removeClass("inactive");
//        $(this).addClass("active");

        //Some more stuff

    });
    //        var thisheigth = parseInt($(this).next('.notice_text').css('height'))
    //
    //        var hh1 = 41



    //        $('.notice_tr').not(this).css({
    //            height: 40
    //        })
    //
    //        $(this).css({
    //            height: hh1
    //        })
    //
    //
    //        $('#notice_wrapper').css({
    //            height: hh2
    //        })
    //        $('#wrapper').css({
    //            height: hh3
    //        })

})
