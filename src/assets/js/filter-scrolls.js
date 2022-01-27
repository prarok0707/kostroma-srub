"use strict";

const filterScrolls = () => {
  const body = document.body;
  const scrolls = body.querySelectorAll(".scrolls-filter__item");
  let currentScrollValueMax;
  let currentParentScroll;
  let currentParentMetrics;
  let currentThumb;
  let shiftX;

  if (!scrolls.length) return;

  scrolls.forEach((scroll) => {
    const scrollValueMin = scroll.querySelector(`[data-scrolls-value="min"]`);
    const scrollValueMax = scroll.querySelector(`[data-scrolls-value="max"]`);

    const scrollInputRange = scroll.querySelector(`.scrolls-filter__range`);

    const thumbMin = scroll.querySelector(`[data-scrolls-thumb="min"]`);
    const thumbMax = scroll.querySelector(`[data-scrolls-thumb="max"]`);

    const thumbSpanMin = thumbMin.querySelector(`span`);
    const thumbSpanMax = thumbMax.querySelector(`span`);

    if (thumbSpanMin) {
      thumbSpanMin.textContent = scrollValueMin
        ? scrollValueMin.textContent.split(".").join(" ")
        : "0";
      setFiletInputRange({
        input: scrollInputRange,
        thumb: thumbMin,
      });
    }
    if (thumbSpanMax) {
      thumbSpanMax.textContent = scrollValueMax
        ? scrollValueMax.textContent.split(".").join(" ")
        : "0";
      setFiletInputRange({
        input: scrollInputRange,
        thumb: thumbMax,
      });
    }

    thumbMin.addEventListener("mousedown", handlerMouseDown);
    thumbMax.addEventListener("mousedown", handlerMouseDown);

    thumbMin.addEventListener("touchstart", handlerMouseDown);
    thumbMax.addEventListener("touchstart", handlerMouseDown);
  });

  function getMetrics(elem) {
    if (!elem) return null;

    const width = elem.getBoundingClientRect().width;
    const left = elem.getBoundingClientRect().left;
    const top = elem.getBoundingClientRect().top;
    const right = elem.getBoundingClientRect().right;

    return {
      width: width,
      left: left,
      top: top,
      right: right,
    };
  }

  function handlerMouseDown(event) {
    event.preventDefault();
    const touchEvent = event.__proto__.constructor.name;

    if (touchEvent === "TouchEvent") {
      event = event.touches[0];
    }

    currentThumb = this;
    currentParentScroll = this.closest(`[data-scrolls]`);
    currentScrollValueMax = currentParentScroll
      .closest(".scrolls-filter__item")
      .querySelector(`[data-scrolls-value="max"]`).textContent;
    currentParentMetrics = getMetrics(currentParentScroll);
    shiftX = event.clientX - currentThumb.getBoundingClientRect().left;

    if (!currentParentMetrics) return;

    setFiletInputRange({
      input: currentParentScroll.querySelector(`.scrolls-filter__range`),
      thumb: currentThumb,
    });

    body.addEventListener("mousemove", handlerMouseMove);
    body.addEventListener("mouseup", handlerMouseUp);

    body.addEventListener("touchmove", handlerMouseMove);
    body.addEventListener("touchend", handlerMouseUp);
  }

  function changeValueThumb(thumb, shiftNew) {
    const span = thumb.querySelector("span");
    const maxValue = currentScrollValueMax.split(".").join("");
    const procentShift = Math.round(
      (shiftNew * 100) / (currentParentMetrics.width - thumb.offsetWidth)
    );
    const value = Math.round(maxValue * (procentShift / 100));
    let index = 1;

    const result = String(value)
      .split("")
      .map((val, currentIndex) => {
        let res = `${val}`;

        if (currentIndex === index) {
          index += 3;
          res += " ";
        }
        return res;
      })
      .join("");

    span.textContent = result;
  }

  function setFiletInputRange(obj) {
    const { input, thumb } = obj;
    const range = thumb.querySelector("span").textContent;

    if (thumb.dataset.scrollsThumb === "min") {
      input.dataset.scrollsRangeMin = range.split(" ").join("");
    } else {
      input.dataset.scrollsRangeMax = range.split(" ").join("");
    }
  }

  function handlerMouseMove(event) {
    const touchEvent = event.__proto__.constructor.name;

    if (touchEvent === "TouchEvent") {
      event = event.touches[0];
    }

    const thumbMin = currentParentScroll.querySelector(
      `[data-scrolls-thumb="min"]`
    );
    const thumbMax = currentParentScroll.querySelector(
      `[data-scrolls-thumb="max"]`
    );
    const scrollFilling = currentParentScroll.querySelector(
      `[data-scrolls-filling]`
    );
    let shiftNew = event.clientX - shiftX - currentParentMetrics.left;
    let xMin;
    let xMax;

    if (currentThumb === thumbMin) {
      xMin = 0;
      xMax =
        thumbMax.getBoundingClientRect().left -
        thumbMax.offsetWidth -
        currentParentMetrics.left;

      if (shiftNew <= xMin) shiftNew = xMin;
      if (shiftNew >= xMax) shiftNew = xMax;

      currentThumb.style.left = shiftNew + "px";
      scrollFilling.style.left = shiftNew + "px";
    } else {
      xMin =
        thumbMin.getBoundingClientRect().left +
        thumbMin.offsetWidth -
        currentParentMetrics.left;
      xMax = currentParentScroll.offsetWidth - currentThumb.offsetWidth;

      if (shiftNew <= xMin) shiftNew = xMin;
      if (shiftNew >= xMax) shiftNew = xMax;

      currentThumb.style.left = shiftNew + "px";
      scrollFilling.style.right =
        currentParentMetrics.width - shiftNew - currentThumb.offsetWidth + "px";
    }

    changeValueThumb(currentThumb, shiftNew);
    setFiletInputRange({
      input: currentParentScroll.querySelector(`.scrolls-filter__range`),
      thumb: currentThumb,
    });
  }

  function handlerMouseUp(event) {
    this.removeEventListener("mousemove", handlerMouseMove);
    this.removeEventListener("touchmove", handlerMouseMove);
  }
};

export default filterScrolls;
