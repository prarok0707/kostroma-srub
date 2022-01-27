"use strict";

const checkbox = () => {
  const container = document.querySelector(".filter__checkboxes");

  if (!container) return;

  const inputs = container.querySelectorAll(".filter__checkbox-input");
  inputs.forEach((input) => {
    input.addEventListener("change", handlerChecked);
  });

  function handlerChecked(event) {
    if (this.name === "size-all") {
      inputs.forEach((input) => {
        if (input.name !== "size-all") {
          input.checked = false;
        }
      });
    } else {
      container.querySelector(`#size-all`).checked = false
    }
  }
};

export default checkbox;
