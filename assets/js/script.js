
$(".mo-btn-b").mouseover(function(){
    $(".mo-btn-b").css("background-color","#15A5B6");
});
$(".mo-btn-r").mouseover(function(){
    $(".mo-btn-r").css("background-color","#E53C30");
});
$(".mo-btn-b").mouseleave(function(){
    $(".mo-btn-b").css("background-color","#FFFBDB");
});
$(".mo-btn-r").mouseleave(function(){
    $(".mo-btn-r").css("background-color","#FFFBDB");
});
$(".mo-text").click(function(){
    $(".modal-bg").fadeOut();
});


$(".product-arrow").click(function(){
    $(".modal-box").fadeIn();
})
$(".modal-box").mouseleave(function(){
    $(".modal-box").fadeOut();
})









$(function(){
    $(".mo-navi").click(function(){
        $(".mo-gnb").toggleClass("d-block");
    });
});





