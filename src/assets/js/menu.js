"use strict";

const menu = () => {
  const menu = document.querySelector('.menu')
  if (!menu) return

  const handlerClick = (e) => {
    menu.classList.toggle('menu-show')
    document.body.classList.toggle('no-scroll')
  }

  document.querySelectorAll('[data-menu-burger]').forEach(btn => {
    btn.addEventListener('click', handlerClick)
  })
};

export default menu;
