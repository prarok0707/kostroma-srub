"use strict";
import LoadedPhotos from "./loaded-photos";

const photoSlider = () => {
  const slider = document.body.querySelector(".photo-slider");

  if (!slider) return;

  const arrPhotoUrl = document.body.querySelectorAll("[data-photo-slider-url]");
  const wrapper = slider.querySelector(".photo-slider__wrapper");
  let swiper;
  let loaded;

  arrPhotoUrl.forEach((elem, index) => {
    elem.addEventListener("click", handlerShowSlider);
    elem.setAttribute("data-photo-slider-index", index + 1);

    const url = elem.dataset.photoSliderUrl;
    const slide = `
      <div class="swiper-slide">
        <div class="photo-slider__image image">
          <img
            data-photo-url="${url}"
            alt="Photo"
          />
        </div>
      </div>
    `;

    wrapper.insertAdjacentHTML("beforeend", slide);
  });

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

  loaded = new LoadedPhotos({
    selector: ".photo-slider__image",
    delay: 2000,
  });

  slider.addEventListener("click", function (e) {
    const target = e.target;

    if (target === this || target.closest(".photo-slider__button-close")) {
      this.classList.remove("photo-slider_show");
    }
  });

  function handlerShowSlider(event) {
    const index = this.dataset.photoSliderIndex;
    swiper.slideTo(index, 0);
    slider.classList.add("photo-slider_show");
  }
};

export default photoSlider;