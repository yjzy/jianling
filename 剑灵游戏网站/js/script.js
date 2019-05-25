$(function(){
    //隐藏菜单
    $('#active').mouseover(function(){
        $('#hide').show()
        $(this).css('background','#fff')
    })
    $('#active').mouseout(function(){
        $('#hide').hide()
        $(this).css('background','')
    })
})
//职业热点
$(function(){
    $('.header-more-wrap').mouseover(function(){
        $('.icon-hide').show()
        $(this).css('background','#fff')
    })
    $('.header-more-wrap').mouseout(function(){
        $('.icon-hide').hide()
        $(this).css('background','')
    })
})

//tab菜单栏
$(function(){
    var imgIndex = 0;
    $('#arrowRight').click(function(){
         imgIndex++
         if(imgIndex > 2){
             imgIndex = 0;
         }
       $('#imgBox li').eq(imgIndex).stop().fadeIn().siblings().stop().fadeOut()
       $('#dianBox li').eq(imgIndex).addClass('current').siblings().removeClass('current')     
    })
    $('#arrowLeft').click(function(){
        imgIndex--
        if(imgIndex < 0){
            imgIndex =2
        }
        $('#imgBox li').eq(imgIndex).stop().fadeIn().siblings().stop().fadeOut()
       $('#dianBox li').eq(imgIndex).addClass('current').siblings().removeClass('current')   
    })
    $('#dianBox li').hover(function(){
        imgIndex =$(this).index()
        $('#imgBox li').eq(imgIndex).stop().show().siblings().stop().hide()
       $('#dianBox li').eq(imgIndex).addClass('current').siblings().removeClass('current')  
    })
   var timer =setInterval(function(){
       $('#arrowRight').click()
   },2000)
   $('.banner_left').hover(function(){
       clearInterval(timer)
   },30)
   $('#arrowRight').click()
},2000)

