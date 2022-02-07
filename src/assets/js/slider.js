"use strict";

const slider = () => {
  const sliderProject = () => {
    const projectSlider = new Swiper(".slider-project", {
      slidesPerView: 1,
      navigation: {
        nextEl: ".slider-project__btn_next",
        prevEl: ".slider-project__btn_prev",
      },
      loop: true,
      grabCursor: true,

      breakpoints: {
        768: {
          loop: false,
        },
      },
    });

    const projectSubslider = new Swiper(".subslider-project", {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      observer: true,

      breakpoints: {
        1200: {
          slidesPerView: 7,
        },
        992: {
          slidesPerView: 5,
        },
      },

      on: {
        init: function () {
          if (this.slides.length) {
            this.slides[0].classList.add("swiper-slide_active");
          }
        },
      },
    });

    projectSlider.on("slideChange", function (swiper) {
      const activeIndex = swiper.activeIndex;
      projectSubslider.slideTo(activeIndex);

      projectSubslider.slides.forEach((item, index) => {
        item.classList.remove("swiper-slide_active");

        if (activeIndex === index) {
          item.classList.add("swiper-slide_active");
        }
      });
    });

    projectSubslider.on("click", function (swiper) {
      const clickedIndex = swiper.clickedIndex;
      projectSlider.slideTo(clickedIndex);
    });
  };

  const photoSlider = () => {
    const slider = document.body.querySelector(".photo-slider");
    let swiper;

    if (!slider) return;

    swiper = new Swiper(".photo-slider__swiper", {
      slidesPerView: 1,
      spaceBetween: 15,
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".photo-slider__pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".photo-slider-button-next",
        prevEl: ".photo-slider-button-prev",
      },
    });

    slider.addEventListener("click", function (e) {
      const target = e.target;

      if (target === this || target.closest(".photo-slider__button-close")) {
        this.classList.remove("photo-slider_show");
      }
    });
  };

  sliderProject();
  photoSlider();
};

export default slider;
