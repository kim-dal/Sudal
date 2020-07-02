        $(document).ready(function() {
            $(function() {
                $('.content').load("4_sub1.html");
                // 서버에서 구동하는 메소드

                $('.shop_nav .btnLoad1').click(function() {
                    $('.content').load("4_sub1.html");
                    $(".shop_nav li a").not($(this)).removeClass("now")
                    $(".btnLoad1").addClass("now")

                });
                $('.shop_nav .btnLoad2').click(function() {
                    $('.content').load("4_sub2.html");
                    $(".shop_nav li a").not($(this)).removeClass("now")
                    $(".btnLoad2").addClass("now")

                });
                $('.shop_nav .btnLoad3').click(function() {
                    $('.content').load("4_sub3.html");
                    $(".shop_nav li a").not($(this)).removeClass("now")
                    $(".btnLoad3").addClass("now")
                });
            });
        })