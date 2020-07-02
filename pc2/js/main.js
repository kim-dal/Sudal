$(document).ready(function() {
        $('.story_r .btn .abtn').click(function() {
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

        var $panel = $(".visual").find("ul");
        var itemWidth = $panel.children().outerWidth(); 
        var itemLength = $panel.children().length; 
        var index = 0
        var rollingId;

        auto();


//        $("#prev").on("click", prev);      
//        $("#next").on("click", next);

        function auto() {
            rollingId = setInterval(function() {
                start();
            }, 4000);
            
        }
        
    
         function start(){
            index++
             
            if(index >=itemLength){
                index = 0}
            else if(index < 0){
                index = itemLength}

            $panel.stop().animate(
                {left:-(itemWidth*index)}),2000 
            }
    });

        
//        function prev(e) {
//            $('#prev').attr('disabled', true);
//
//            $panel.css("left", -itemWidth);
//            $panel.prepend("<li>" + $panel.find("li:last").html() + "</li>");
//
//            $panel.animate({
//                "left": "0px"
//            }, function() {
//                $(this).find("li:last").remove();
//                $('#prev').attr('disabled', false);
//            });
//        }
//
//        function next(e) {
//            $panel.animate({
//                "left": -itemWidth + "px"
//            }, function() {
//                $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
//                $(this).find("li:first").remove();
//                $(this).css("left", 0);
//            });
//        }
    
   
