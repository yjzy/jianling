$(function(){
    
    $('.faq_kinds a').click(function (){
        $(this).addClass('current').parent().siblings().children().removeClass('current');
        var index= $(this).parent().index();
        $('.cont_list dl').eq(index).show().siblings('dl').hide();
        
    })

    $('.kf_mod_searchBox>input').click(function(){
        $(this).val('');
    })
    $('.kf_mod_searchBox>input').blur(function(){
        $(this).val('请输入产品或问题');
    })







})