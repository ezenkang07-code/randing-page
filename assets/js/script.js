
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
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });


/* brand — GSAP ScrollTrigger */
(function () {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  var brandSection = document.querySelector('#brand');
  if (!brandSection) return;

  var brandImg = brandSection.querySelector('.brand-img img');
  var brandInfos = brandSection.querySelectorAll('.brand-info');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    gsap.set([brandImg].concat(Array.from(brandSection.querySelectorAll('.brand-title h1, .brand-desc p'))), {
      clearProps: 'all'
    });
    return;
  }

  var tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    scrollTrigger: {
      trigger: brandSection,
      start: 'top 70%',
      once: true
    }
  });

  if (brandImg && window.getComputedStyle(brandSection.querySelector('.brand-img')).display !== 'none') {
    gsap.set(brandImg, { opacity: 0, scale: 1.12, y: 48 });
    tl.to(brandImg, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.15
    }, 0);
  }

  brandInfos.forEach(function (info, index) {
    var title = info.querySelector('.brand-title h1');
    var paragraphs = info.querySelectorAll('.brand-desc p');
    var startAt = index === 0 ? 0.15 : 0.55;

    if (title) {
      gsap.set(title, { opacity: 0, y: 56 });
      tl.to(title, {
        opacity: 1,
        y: 0,
        duration: 0.85
      }, startAt);
    }

    if (paragraphs.length) {
      gsap.set(paragraphs, { opacity: 0, y: 36 });
      tl.to(paragraphs, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12
      }, startAt + 0.18);
    }
  });
})();
