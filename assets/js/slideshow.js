document.addEventListener("DOMContentLoaded", function () {

  new Swiper(".hero-swiper", {

    loop: true,

    speed: 1200,

    effect: "fade",

    fadeEffect: {
      crossFade: true
    },

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }

  });

});
