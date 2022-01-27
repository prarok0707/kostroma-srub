"use strict";

const slider = () => {
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
        loop: false
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
      }
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

  projectSubslider.on('click', function(swiper) {
    const clickedIndex = swiper.clickedIndex;
    projectSlider.slideTo(clickedIndex);
  })
};

export default slider;
