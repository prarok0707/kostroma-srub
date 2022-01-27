"use strict";

const filterReset = () => {
  const resetButton = document.querySelector(".filter__reset");

  if (!resetButton) return;

  resetButton.addEventListener("click", handlerReset);

  function handlerReset(event) {
    event.preventDefault();

    const form = this.closest("form");
    const scrollsItems = form.querySelectorAll(".scrolls-filter__item");
    const checkboxes = form.querySelector(".filter__checkboxes");
    const radioItems = form.querySelectorAll(".filter__radio-group");
    
    resetScrolls(scrollsItems);
    resetCheckboxes(checkboxes);
    resetRadio(radioItems);
  }

  function resetScrolls(scrolls) {
    if (!scrolls.length) return;

    scrolls.forEach((scroll) => {
      const valueMin = scroll.querySelector(`[data-scrolls-value="min"]`);
      const valueMax = scroll.querySelector(`[data-scrolls-value="max"]`);
      const filling = scroll.querySelector("[data-scrolls-filling]");
      const thumbMin = scroll.querySelector(`[data-scrolls-thumb="min"]`);
      const thumbMax = scroll.querySelector(`[data-scrolls-thumb="max"]`);
      const input = scroll.querySelector("input");

      filling.removeAttribute("style");
      thumbMin.removeAttribute("style");
      thumbMax.removeAttribute("style");

      thumbMin.querySelector("span").textContent = valueMin.textContent
        .split(".")
        .join(" ");
      thumbMax.querySelector("span").textContent = valueMax.textContent
        .split(".")
        .join(" ");

      input.dataset.scrollsRangeMin = valueMin.textContent.split(".").join("");
      input.dataset.scrollsRangeMax = valueMax.textContent.split(".").join("");
    });
  }

  function resetCheckboxes(checkboxes) {
    if (!checkboxes) return;
    const inputs = checkboxes.querySelectorAll(".filter__checkbox-input");

    if (!inputs.length) return;
    inputs.forEach((input) => (input.checked = input.id === "size-all"));
  }

  function resetRadio(items) {
    if (!items.length) return;
    items.forEach((item) => (item.querySelector("input").checked = false));
  }
};

export default filterReset;
