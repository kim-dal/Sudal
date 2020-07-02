 $(document).ready(function() {
        var index = 0
        var total = $('.img_tt > img').length
        
        $('.fas').on('click',function(){
            var cnt = eval($(this).attr('date'))
            index += cnt
            
            goSlide()
        })
        
        
        function goSlide(){
             
            if(index >= total-4){
                index = total-4
            }
            if(index < 0){
                index = 0
            }

            $('.img_tt').stop().animate(
                {
                left:-(170*index)
                }
            ),2000  
        }
         
        
                  
        $('.img_tt > img').on('click',function(){
            var small = $(this).attr("src")
            var jj = $('.img_tt > img').eq(0).attr("src")
            
 
            if(small != jj){
                $('.img_big > img').css({
                    width:708,
                })
                $('.img_big').css({
                    width:708,
                    left: 46,
                })
            }else{
                $('.img_big > img').css({
                    width:354,
                })
                $('.img_big').css({
                    width:354,
                    left: 223,
                })
            }
            
                $('.img_big > img').attr('src',small)
            })
        })