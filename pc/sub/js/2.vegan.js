$(document).ready(function () {
    $(function () {
        $('.content').load("2_sub1.html");
        // 서버에서 구동하는 메소드

        $('.sub_nav .btnLoad1').click(function () {
            $('.content').load("2_sub1.html");
            $(".btnLoad2").removeClass("now")
            $(".btnLoad1").addClass("now")

        });
        $('.sub_nav .btnLoad2').click(function () {
            $('.content').load("2_sub2.html");
            $(".btnLoad1").removeClass("now")
            $(".btnLoad2").addClass("now")

        });
    });
})
