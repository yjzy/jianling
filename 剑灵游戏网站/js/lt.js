$(function(){
    $('.dh').mouseover(function(){
        $('.ce').css('display','block');
    })
    $('.dh').mouseout(function(){
        $('.ce').css('display','none');
    })

    //轮播图

    var index = 0;
    var one = setInterval(function(){
        index++;
        if(index>4){
            $('#ul').css('left','0')
            index=0;
        }
        var move = -index * $('.lun_l').width();
        $('#ul').stop().animate({left:move},500);
        if(index ==4){
            $('#ol li').eq(0).addClass('current').sblings().removeClass('current');
        }else{
            $('#ol li').eq(index).addClass('current').siblings().removeClass('current')
        }
    },2000);

    //点击图片切换
    $('#ol>li').click(function(){
        index = $(this).index();
        if(index >4){
            $('#ul').css('left','0')
            index =0;
        }
        var move = -index * $('.lun_l').width();
        $('#ul').stop().animate({left:move},500);
        if(index ==4){
            $('#ol li').addClass('current').sblings().removeClass('current');
        }else{
            $('#ol li').eq(index).addClass('current').siblings().removeClass('current')
        }
    })
    
  


})