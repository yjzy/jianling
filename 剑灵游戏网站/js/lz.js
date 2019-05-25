$(function(){
    $('.dh>ul li').hover(function(){
       $(this).find('a').css({'fontSize':'20px','paddingLeft':'55px'}).find('span').css('display','none');
    },function(){
        $(this).find('a').css({'fontSize':'14px','paddingLeft':'35px'}).find('span').css('display','block');
    })
    
    $('#uu li').hover(function(){
        $(this).find('a').css({'fontSize':'18px','paddingTop':'40px'}).find('span').css('display','none');
    },function(){
        $(this).find('a').css({'fontSize':'14px','paddingTop':'0'}).find('span').css('display','block');
    })
     
    //轮播图
    var imgLi = $('#ul li ').eq(0).clone(true);
    $('#ul').append(imgLi);

    var index =0;
    //点击按钮
    $('.lun>span').click(function(){
        index++;
        if(index>5){
            $('#ul').css('left','0')
            index = 0;
        }
        var move = -index * $('.lun').width();
        $('#ul').stop().animate({left:move},500);
        if(index ==6){
            $('#ol li').eq(0).addClass('current').sblings().removeClass('current');
        }else{
            $('#ol li').eq(index).addClass('current').siblings().removeClass('current')
        }
        
    })
    //定时器切换
    var ding = setInterval(function(){
        $('.lun>span').click();
    },2000);
    //鼠标移入
    $('.lun').mouseover(function(){
        clearInterval(ding);
    })
    //鼠标离开
    $('.lun').mouseout(function(){
        ding = setInterval(function(){
            $('.lun>span').click();
        },2000);
    })


    $('#ol>li').click(function(){
        index = $(this).index();
        if(index >6){
            $('#ul').css('left','-4800px')
            index =1;
        }
        var move = -index * $('.lun').width();
        $('#ul').stop().animate({left:move},500);
        if(index ==6){
            $('#ol li').addClass('current').sblings().removeClass('current');
        }else{
            $('#ol li').eq(index).addClass('current').siblings().removeClass('current')
        }
    })

    $('.fang>ul li').mouseover(function(){
        $(this).children('a').find('img').animate({
            width:'110%'
        },500);
    }).mouseout(function(){
        $('.fang>ul li').children('a').children('img').css('width','261px'); 
    })

    //点击关闭按钮时
    $('.qq span').click(function(){
        $('.bja').css('display','none');
        $('.qq').css('display','none');
    })
    //点击登录按钮时
    $('.deng_t>span>a').click(function(){
        $('.bja').css('display','block');
        $('.qq').css('display','block');
    })
    
});
