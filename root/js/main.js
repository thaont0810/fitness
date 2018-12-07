$(document).ready(function () {
  $(window).scroll(function () {
    let windscroll = $(window).scrollTop();

    if (windscroll > 50) {
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
    autoplayTimeout: 2500
  });
  $('.slider-clients').owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000
  });
  var typing = document.getElementById('typing');
  var typewriter = new Typewriter(typing, {// loop: true,
  });
  typewriter.typeString('It\'s the only place you have to live.').start();
  $('.slider-twitter').owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    autoplay: true
  });
  $("#nav__list").onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing'
  }); // $('.sign-up').click(function() {
  //   $('.popup-overlay').addClass('show');
  //   return false;
  // });
});