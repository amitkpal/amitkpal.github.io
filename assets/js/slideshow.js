document.addEventListener("DOMContentLoaded", function () {

  // Hero / research slideshows (unchanged behaviour)
  document.querySelectorAll(".swiper:not(.paper-swiper)").forEach(function (slider) {
    new Swiper(slider, {
      loop: true, speed: 1200, effect: "fade", fadeEffect: { crossFade: true },
      autoplay: { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true },
      pagination: { el: slider.querySelector(".swiper-pagination"), clickable: true },
      navigation: {
        nextEl: slider.querySelector(".swiper-button-next"),
        prevEl: slider.querySelector(".swiper-button-prev")
      }
    });
  });

  // Recent-papers carousel
  document.querySelectorAll(".paper-swiper").forEach(function (el) {
    var swiper = new Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 18,
      speed: 700,
      rewind: true,
      grabCursor: true,
      autoplay: { delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true },
      pagination: { el: el.querySelector(".swiper-pagination"), clickable: true },
      breakpoints: { 800: { slidesPerView: 2 } }
    });

    // Hide "Read more" when the abstract isn't actually truncated
    el.querySelectorAll(".paper-card").forEach(function (card) {
      var abs = card.querySelector(".paper-card__abstract");
      var btn = card.querySelector(".paper-card__more");
      if (abs.scrollHeight <= abs.clientHeight + 1) { btn.style.display = "none"; }
      btn.addEventListener("click", function () {
        var open = card.classList.toggle("is-open");
        btn.textContent = open ? "Show less" : "Read more";
        btn.setAttribute("aria-expanded", open);
        if (open) { swiper.autoplay.stop(); } else { swiper.autoplay.start(); }
        swiper.update();
      });
    });
  });
});
