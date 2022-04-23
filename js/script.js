$(function () {
    "use strict";


    // banner slider js ====================
    $('#banner-part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    // about video play js =================
    $('.venobox').venobox();

    // Testtimonial slider start ===========
$('.test_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    arrows:false,
    dots:true,
  });
  
  // Counter js start ======================
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });




























});