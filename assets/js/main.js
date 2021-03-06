$(document).ready(function () {
  //script for owl-carousel slider
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });
  // script for navbar (on scroll)
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) $("nav").addClass("purple");
    else $("nav").removeClass("purple");
  });
});
