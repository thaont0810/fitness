$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".nav-container").addClass('sticky');
    } else {
      $(".nav-container").removeClass('sticky');
    }
  });
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    dots: true,
    nav: false
  });
});