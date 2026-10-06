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
    var n = el.querySelectorAll(".swiper-slide").length;

    var swiper = new Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 18,
      speed: 700,
      rewind: true,
      grabCursor: true,
      watchOverflow: true,
      breakpointsBase: "container",          // breakpoints follow the carousel's own width
      autoplay: { delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true },
      pagination: { el: el.querySelector(".swiper-pagination"), clickable: true },
      breakpoints: { 900: { slidesPerView: Math.min(2, n) } }   // never more cards per row than papers
    });

    // Show "Read more" only on cards whose abstract is actually cut off.
    // Cards without an abstract have no abstract or button, so skip them.
    function syncMore() {
      el.querySelectorAll(".paper-card").forEach(function (card) {
        if (card.classList.contains("is-open")) { return; }
        var abs = card.querySelector(".paper-card__abstract");
        var btn = card.querySelector(".paper-card__more");
        if (!abs || !btn) { return; }
        btn.style.display = abs.scrollHeight > abs.clientHeight + 1 ? "" : "none";
      });
    }
    syncMore();
    window.addEventListener("load", syncMore);
    window.addEventListener("resize", function () { window.requestAnimationFrame(syncMore); });
    if (document.fonts && document.fonts.ready) { document.fonts.ready.then(syncMore); }

    el.querySelectorAll(".paper-card").forEach(function (card) {
      var btn = card.querySelector(".paper-card__more");
      if (!btn) { return; }
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
