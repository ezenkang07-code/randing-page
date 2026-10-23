
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



$(".product-arrow").click(function () {
    $(this).closest(".box").find(".modal-box").fadeIn();
});
$(".modal-box").mouseleave(function () {
    $(this).fadeOut();
});






$(function () {
    const $menuButton = $(".mo-navi");
    const $navigation = $(".mo-gnb");

    function setMenuOpen(isOpen) {
        $navigation.toggleClass("is-open", isOpen);
        $menuButton.attr("aria-expanded", isOpen);
        $menuButton.attr("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
    }

    $menuButton.on("click", function () {
        setMenuOpen($menuButton.attr("aria-expanded") !== "true");
    });

    $navigation.find("a").on("click", function () {
        setMenuOpen(false);
    });

    $(document).on("keydown", function (event) {
        if (event.key === "Escape") {
            setMenuOpen(false);
        }
    });

    $(window).on("resize", function () {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            setMenuOpen(false);
        }
    });
});






$('.footer-arrow').click(function(){
    alert('이메일 전송이 완료되었습니다!');
})

$('.mo-btn-r').click(function(){
    $(location).attr('href', 'https://www.google.com');
})



      var swiper = new Swiper('.mySwiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
