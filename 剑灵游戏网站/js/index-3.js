$(function(){
    $('.topbox').hover(function(){
        $('.topnav_mask').stop().slideToggle()
        $('.topnav_mask>ul').stop().slideToggle()

    })
    $('.topnav_mask').hover(function(){
        $('.topnav_mask').stop().slideToggle()
        $('.topnav_mask>ul').stop().slideToggle()
    })
    $('.cooperate>ol>li').mouseover(function(){
        var index = $(this).index()
        var move = -index*400
        $(this).addClass('ol_current').siblings().removeClass('ol_current')
        $('#cooperate_first_ul').stop().animate({'left':move},300)
        $('#cooperate_second_ul').stop().animate({'left':move},300)
        imgIndex = $(this).index()
        //这个步骤是让每触发一次移入事件,就让imgIndex的值和index相等
    })
    //在jQuery中所用的方法和结果都使用括号
    var imgIndex = 0
    var move
    var timer = setInterval(function(){
        imgIndex++
        if(imgIndex>5){
            imgIndex = 0
            $('#cooperate_first_ul').stop().animate({'left':0},300)
            $('#cooperate_second_ul').stop().animate({'left':0},300)
            $('.cooperate>ol>li').eq(imgIndex).addClass('ol_current').siblings().removeClass('ol_current')
        }else{
            move = -imgIndex*400
            $('#cooperate_first_ul').stop().animate({'left':move},300)
            $('#cooperate_second_ul').stop().animate({'left':move},300)
            $('.cooperate>ol>li').eq(imgIndex).addClass('ol_current').siblings().removeClass('ol_current')
        }
    },2500)

    $('.cooperate').hover(function(){
        clearInterval(timer)
    },function(){
        timer = setInterval(function(){
            imgIndex++
            if(imgIndex>5){
                imgIndex = 0
                $('#cooperate_first_ul').stop().animate({'left':0},300)
                $('#cooperate_second_ul').stop().animate({'left':0},300)
                $('.cooperate>ol>li').eq(imgIndex).addClass('ol_current').siblings().removeClass('ol_current')
            }else{
                move = -imgIndex*400
                $('#cooperate_first_ul').stop().animate({'left':move},300)
                $('#cooperate_second_ul').stop().animate({'left':move},300)
                $('.cooperate>ol>li').eq(imgIndex).addClass('ol_current').siblings().removeClass('ol_current')
            }
        },2500)
    })

    $('.cooperate>span>a').eq(1).mouseover(function(){
        $(this).addClass('span_current').siblings().removeClass('span_current')
        $('.cooperate>#cooperate_frist_ul').css('display','none')
        $('.cooperate>#cooperate_second_ul').css('display','block')

    })
    $('.cooperate>span>a').eq(0).mouseover(function(){
        $(this).addClass('span_current').siblings().removeClass('span_current')
        $('.cooperate>#cooperate_frist_ul').css('display','block')
        $('.cooperate>#cooperate_second_ul').css('display','none')
    })
    $('.news_top .news_top_tab li').mouseover(function(){
        var index = $(this).index()
        $(this).find('a').addClass('tabcolor').end().siblings().find('a').removeClass('tabcolor')
        $('.news_top_content>ul').eq(index).css('display','block').siblings().css('display','none')
    })
    $('#suits_top_tab ul li').mouseover(function(){
        var index = $(this).index()
        $(this).find('a').addClass('suits_active').end().siblings().find('a').removeClass('suits_active')
        if(index === 0){
            $('.suits_top').css('background','url(../images/suits1.jpg)')
        }else if(index === 1){
            $('.suits_top').css('background','url(../images/suits2.jpg)')
        }else if(index === 2){
            $('.suits_top').css('background','url(../images/suits3.jpg)')
        }else{
            $('.suits_top').css('background','url(../images/suits4.jpg)')
        }
        
    })

    $('.news_spring_sgin ol li').mouseover(function(){
        var index = $(this).index()
        $(this).addClass('news_spring_sgin_active').siblings().removeClass('news_spring_sgin_active')
        var move = -index*192
        $('.news_spring_sgin ul').stop().animate({'left':move},300)
        imgIndex_one = index
    })
    var imgIndex_one = 0
    var timer_one = setInterval(function(){
        imgIndex_one++
        if(imgIndex_one>2){
            imgIndex_one = 0
            $('.news_spring_sgin ul').stop().animate({'left':0},300)
            $('.news_spring_sgin>ol>li').eq(imgIndex_one).addClass('news_spring_sgin_active').siblings().removeClass('news_spring_sgin_active')
        }else{
            move = -imgIndex_one*192
            $('.news_spring_sgin ul').stop().animate({'left':move},300)
            $('.news_spring_sgin>ol>li').eq(imgIndex_one).addClass('news_spring_sgin_active').siblings().removeClass('news_spring_sgin_active')
        }
    },3000)
    $('.news_spring_sgin').hover(function(){
        clearInterval(timer_one)
    },function(){
        timer_one = setInterval(function(){
            imgIndex_one++
            if(imgIndex_one>2){
                imgIndex_one = 0
                $('.news_spring_sgin ul').stop().animate({'left':0},300)
                $('.news_spring_sgin>ol>li').eq(imgIndex_one).addClass('news_spring_sgin_active').siblings().removeClass('news_spring_sgin_active')
            }else{
                move = -imgIndex_one*192
                $('.news_spring_sgin ul').stop().animate({'left':move},300)
                $('.news_spring_sgin>ol>li').eq(imgIndex_one).addClass('news_spring_sgin_active').siblings().removeClass('news_spring_sgin_active')
            }
        },3000)
    })
    $('.suits_center>ol>li').mouseover(function(){
        var index = $(this).index()
        $(this).addClass('suits_center_current').siblings().removeClass('suits_center_current')
        var move = -index*192
        $('.suits_center ul').stop().animate({'left':move},300)
        imgIndex_two = index
    })
    var imgIndex_two = 0
    var timer_two = setInterval(function(){
            imgIndex_two++
            if(imgIndex_two>2){
                imgIndex_two = 0
                $('.suits_center ul').stop().animate({'left':0},300)
                $('.suits_center>ol>li').eq(imgIndex_two).addClass('suits_center_current').siblings().removeClass('suits_center_current')
            }else{
                move = -imgIndex_two*192
                $('.suits_center ul').stop().animate({'left':move},300)
                $('.suits_center>ol>li').eq(imgIndex_two).addClass('suits_center_current').siblings().removeClass('suits_center_current')
            }
        },3300)
    $('.suits_center').hover(function(){
        clearInterval(timer_two)
    },function(){
        timer_two = setInterval(function(){
            imgIndex_two++
            if(imgIndex_two>2){
                imgIndex_two = 0
                $('.suits_center ul').stop().animate({'left':0},300)
                $('.suits_center>ol>li').eq(imgIndex_two).addClass('suits_center_current').siblings().removeClass('suits_center_current')
            }else{
                move = -imgIndex_two*192
                $('.suits_center ul').stop().animate({'left':move},300)
                $('.suits_center>ol>li').eq(imgIndex_two).addClass('suits_center_current').siblings().removeClass('suits_center_current')
            }
        },3300)
    })
    $('.suits_bottom>ol>li').mouseover(function(){
        var index = $(this).index()
        $(this).addClass('suits_bottom_current').siblings().removeClass('suits_bottom_current')
        var move = -index*192
        $('.suits_bottom ul').stop().animate({'left':move},300)
        imgIndex_three = index
    })
    var imgIndex_three = 0
    var timer_three = setInterval(function(){
        imgIndex_three++
            if(imgIndex_three>2){
                imgIndex_three = 0
                $('.suits_bottom ul').stop().animate({'left':0},300)
                $('.suits_bottom>ol>li').eq(imgIndex_three).addClass('suits_bottom_current').siblings().removeClass('suits_bottom_current')
            }else{
                move = -imgIndex_three*192
                $('.suits_bottom ul').stop().animate({'left':move},300)
                $('.suits_bottom>ol>li').eq(imgIndex_three).addClass('suits_bottom_current').siblings().removeClass('suits_bottom_current')
            }
        },2800)
    $('.suits_bottom').hover(function(){
        clearInterval(timer_three)
    },function(){
        timer_three = setInterval(function(){
            imgIndex_three++
            if(imgIndex_three>2){
                imgIndex_three = 0
                $('.suits_bottom ul').stop().animate({'left':0},300)
                $('.suits_bottom>ol>li').eq(imgIndex_three).addClass('suits_bottom_current').siblings().removeClass('suits_cbottom_current')
            }else{
                move = -imgIndex_three*192
                $('.suits_bottom ul').stop().animate({'left':move},300)
                $('.suits_bottom>ol>li').eq(imgIndex_three).addClass('suits_bottom_current').siblings().removeClass('suits_bottom_current')
            }
        },2800)
    })

    $('#cosplay>li').mouseover(function(){
        var index = $(this).index()
        $(this).addClass('active').siblings().removeClass('active')
        var move = -index*542
        $('.cosplay_pic').stop().animate({'left':move},300)
        imgIndex_four = index
    })
    var imgIndex_four = 0
    var timer_four = setInterval(function(){
        imgIndex_four++
        if(imgIndex_four>4){
            imgIndex_four = 0
            $('.cosplay_pic').stop().animate({'left':0},300);
            $('#cosplay>li').eq(imgIndex_four).addClass('active').siblings().removeClass('active')
        }else{
            move = -imgIndex_four*542
            $('.cosplay_pic').stop().animate({'left':move},300)
            $('#cosplay>li').eq(imgIndex_four).addClass('active').siblings().removeClass('active')
        }
    },3000)
    $('.gameguide_content_cosplay').hover(function(){
        clearInterval(timer_four)
    },function(){
        timer_four = setInterval(function(){
            imgIndex_four++
            if(imgIndex_four>4){
                imgIndex_four = 0
                $('.cosplay_pic').stop().animate({'left':0},300);
                $('#cosplay>li').eq(imgIndex_four).addClass('active').siblings().removeClass('active')
            }else{
                move = -imgIndex_four*542
                $('.cosplay_pic').stop().animate({'left':move},300)
                $('#cosplay>li').eq(imgIndex_four).addClass('active').siblings().removeClass('active')
            }
        },3000)
    })

    $('#community li').click(function(){
        var index = $(this).index()
        $('.community_content_links>ul').eq(index).css('display','block').siblings().css('display','none')
        $(this).addClass('li_color').siblings().removeClass('li_color')
    })
    // --------------------------左边部分---------------------
    $('.mydownload').hover(function(){
        $('#moveBox').stop().animate({'top':'-170px'},300)
    },function(){
        $('#moveBox').stop().animate({'top':'20px'},300)
    })

    $('.freshman').hover(function(){
        $('.freshman').css('backgroundColor','#D16302')
        $('.freshman i').stop().slideUp(300)
        $('.freshman span').stop().animate({'top':'35px'},200)
    },function(){
        $('.freshman').css('backgroundColor','')
        $('.freshman').css('backgroundColor','#D16302')
        $('.freshman i').stop().slideDown(300)
        $('.freshman span').stop().animate({'top':'53px'},200)
    })
    $('.tab_center>ul>li').hover(function(){
        $(this).find('.tab_center_mask').css('display','block')
    },function(){
        $(this).find('.tab_center_mask').css('display','none')
    })
    $('.service>ul>li').hover(function(){
        $(this).css('backgroundColor','skyblue')
        $(this).find('a').find('i').stop().slideUp(300)
        $(this).find('a').find('span').stop().animate({'top':'42px'},300)
        $(this).find('a').find('span').css('color','white')
    },function(){
        $(this).css('backgroundColor','')
        $(this).find('a').find('i').stop().slideDown(300)
        $(this).find('a').find('span').stop().animate({'top':'70'},300)
        $(this).find('a').find('span').css('color','')

    })
    $('.vip>ul>li').hover(function(){
        $(this).find('.vip_mask').css('display','none')
        $(this).find('a').css('backgroundColor','skyblue')
    },function(){
        $(this).find('.vip_mask').css('display','block')
        $(this).find('a').css('backgroundColor','')
    })
    var move_x1
    var move1 = 0
    var move
    $('.version_ul').mouseover(function(e){
        move_x1 = e.pageX
        //这里让鼠标移入的时候mouseover事件只执行一次
        //下次移入再执行一次
    })
    $('.version_ul').mousemove(function(e){
        $('.version_ul').unbind('mouseover')
        //这里使用解绑事件,在触发另一件事前的时候
        //取消另一件事件的绑定效果
        var move_x = e.pageX
        move  = move_x - move_x1
        move = move1 + move
        console.log(move)
        if(move<0){
            move = 0
        }
        if(move>6610){
            move = 6610
        }
        $('.version_ul').css('left',-move)
        
    })
    $('.version_ul').bind('mouseleave',function(){
        move1 = move
        console.log(move1+'------------')
        $('.version_ul').bind('mouseover',function(e){
            move_x1 = e.pageX
        })
    })
    $('.version_ul>li').mouseover(function(){
        $(this).find('.version_mask').css('display','none')
        $(this).siblings().find('.version_mask').css('display','block')
    })
})