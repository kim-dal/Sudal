    $(document).ready(function () {
   

        //서포트 클릭시
        $('.support').click(function () {
            if ($('.support').height() == 106) {
                $('.support_content').slideDown('slow');
                $(this).children('i').css({
                    transform: 'rotate(180deg)'
                })
            } else {
                $('.support_content').slideUp('fast');
                $(this).children('i').css({
                    transform: 'rotate(0deg)'
                })
            }
        })
    })