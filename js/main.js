$(function () {
  $(".slider__inner").slick({
    arrows: false,
    dots: true,
  });
  $(".works__inner").slick({
    // arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/sliders/slide-left.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/sliders/slide-right.svg" alt=""></button>',
  });
});
