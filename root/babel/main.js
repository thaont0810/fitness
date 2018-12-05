$(document).ready(function () {

  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".nav-container").addClass('sticky');
    } else {
      $(".nav-container").removeClass('sticky');
    }
  });

  $(".slider-schedule").owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2500,
  });

  $('.slider-clients').owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
  });

  var typing = document.getElementById('typing');

  var typewriter = new Typewriter(typing, {
    // loop: true,
  });

  typewriter.typeString('It\'s the only place you have to live.')
    // .deleteAll()
    .start();
});