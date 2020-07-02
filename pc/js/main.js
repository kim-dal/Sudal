 $(document).ready(function() {
            //이슈 슬라이드 스크립트 //
            var index = 0
            var total = $('.issue_wrap li').length
            
            function goSlide() {
                if (index >= total - 3) {
                    index = total - 3
                }
                if (index < 0) {
                    index = 0
                }
                $('.issue_wrap').stop().animate({
                    left: -(370 * index)
                }), 2000
            }
            $('.prev').on('click', function() {
                var cnt = -1
                index += cnt

                goSlide()
            })
            $('.next').on('click', function() {
                var cnt = 1
                index += cnt

                goSlide()
            })


            //구독 스크립트 //
            $('.sub_right li a').on('mouseover', function() {
                $(this).css({
                    width: 600,
                })
                $('.sub_right li a').not($(this)).css({
                    width: 160,})
            })

            $('.sub_right li a').on('mouseout', function() {
                $(this).css({
                    width: 380,
                })
                $('.sub_right li a').not($(this)).css({
                    width: 380,})
            })


            //커뮤니티 스크립트 //
            $(".comm_list img").on("click", function() {
                var nowImg = $(this).attr("src")
                var nowTTT = $(this).next().html()

                var bigImg = $(".view img").attr("src")
                var bigTTT = $(".view dl").html()

                $(".view img").attr("src", nowImg)
                $(this).attr("src", bigImg)
                
                $(this).next().html(bigTTT)
                $(".view dl").html(nowTTT)

                console.log(bigTTT)
                console.log(nowTTT)

            })

            $('.btns').on('mouseover', function() {
                $(this).addClass('mouseov')
            })

            $('.btns').on('mouseout', function() {
                $(this).removeClass('mouseov')
            })


            //쇼핑 스크립트//
            $(function() {
            $('#shop_content_').load("shop_sub1.html");

            $('.shop_nav .btnLoad1').click(function() {
                $('#shop_content_').load("shop_sub1.html");
                $(".shop_nav li a").not($(this)).removeClass("now")
                $(".btnLoad1").addClass("now")

            });
            $('.shop_nav .btnLoad2').click(function() {
                $('#shop_content_').load("shop_sub2.html");
                $(".shop_nav li a").not($(this)).removeClass("now")
                $(".btnLoad2").addClass("now")

            });
            $('.shop_nav .btnLoad3').click(function() {
                $('#shop_content_').load("shop_sub3.html");
                $(".shop_nav li a").not($(this)).removeClass("now")
                $(".btnLoad3").addClass("now")
            });
        });

        })