document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".swiper").forEach(function (slider) {

        new Swiper(slider, {

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
                el: slider.querySelector(".swiper-pagination"),
                clickable: true
            },

            navigation: {
                nextEl: slider.querySelector(".swiper-button-next"),
                prevEl: slider.querySelector(".swiper-button-prev")
            }

        });

    });

});
