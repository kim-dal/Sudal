$(document).ready(function () {
    $(function () {
        $('.content').load("sub2_1.html");

        $('.sub_tab .btnLoad1').click(function () {
            $('.content').load("sub2_1.html");
            $(".sub_tab li a").removeClass("view")
            $(".btnLoad1").addClass("view")

        });
        $('.sub_tab .btnLoad2').click(function () {
            $('.content').load("sub2_2.html");
            $(".sub_tab li a").removeClass("view")
            $(".btnLoad2").addClass("view")

        });
    });
})
