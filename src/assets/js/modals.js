"use strict";

const modals = () => {
  const body = document.body
  const callModalButtons = body.querySelectorAll("[data-modal-call]");
  let currentModal;
  let buttonCloseModal;

  if (!callModalButtons.length) return;

  const showModal = ({ target }) => {
    const nameModal = target.dataset.modalCall;
    currentModal = body.querySelector(`[data-modal-name="${nameModal}"]`);

    if (!currentModal) return;

    buttonCloseModal = currentModal.querySelector(".modal__close-button");

    currentModal.classList.add("modal_show");

    if (!body.classList.contains('no-scroll')) {
      body.classList.add('no-scroll')
    }

    currentModal.addEventListener("click", modalHidden);
  };

  const modalHidden = function ({ target }) {
    let close = target === currentModal || target === buttonCloseModal;

    if (close) {
      this.classList.remove("modal_show");
      body.classList.remove('no-scroll')
    }
  };

  Array.from(callModalButtons).forEach((button) => {
    button.addEventListener("click", showModal);
  });
};

export default modals;
