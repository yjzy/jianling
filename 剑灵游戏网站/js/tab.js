$(function(){
    $(".down-top3s").mouseover(function(){
       $(".down-top3").css("display","none")
       $(".down-top3s>span").addClass("bian")
    })
    $(".down-top3s").mouseout(function(){
        $(".down-top3").css("display","block")
        $(".down-top3s>span").removeClass("bian")
     })
   


     $(".dps_s>a").mouseover(function(){
        $(this).siblings("a").children("div").css("display","block")
        $(this).children("div").css("display","none")
        $(this).siblings("a").removeClass("dps_1")
        $(this).addClass("dps_1")
        $(this).siblings("a").children("span").removeClass("show").addClass("spans")
        $(this).children("span").addClass("show").removeClass("spans")
     })
     $(".dps_s>a").mouseout(function(){
         $(".dps_s>a").children("div").css("display","block")
         $(".dps_s>a").removeClass("dps_1")
         $(".dps_s>a").children("span").removeClass("show").addClass("spans")
     })


     $(".urs>li").mouseover(function(){
        $(this).siblings("li").children("div").css("display","block")
        $(this).siblings("li").removeClass("bgli")
        $(this).addClass("bgli")
        $(this).children("div").css("display","none")
        $(this).siblings("li").children("i").removeClass("lis")
        $(this).children("i").addClass("lis")

     })
     $(".urs>li").mouseout(function(){
        $(".urs>li").children("div").css("display","block")
        $(".urs>li").removeClass("bgli")
        $(".urs>li").children("i").removeClass("lis")
     })
})