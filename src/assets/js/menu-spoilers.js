"use strict";

const menuSpoilers = () => {
  const menu = document.querySelector(".menu");
  const allSubmenu = [];
  if (!menu) return;

  const handlerClick = ({ target }) => {
    if (!target.classList.contains("menu__link")) return;

    const submenu = target.nextElementSibling;

    if (!submenu.classList.contains("submenu-show")) {
      submenu.classList.add("submenu-show");
      const height = submenu.offsetHeight + "px";
      submenu.style.height = "0px";

      setTimeout(() => {
        submenu.style.height = height;
      });
    } else {
      submenu.style.height = "0px";

      submenu.ontransitionend = () => {
        submenu.removeAttribute("style");
        submenu.classList.remove("submenu-show");
        submenu.ontransitionend = null;
      };
    }
  };

  const handlerResize = (e) => {
    if (document.body.offsetWidth > 1200) {
      if (!allSubmenu.length) return;

      allSubmenu.forEach((submenu) => {
        submenu.removeAttribute("style");
        submenu.classList.remove("submenu-show");
      });
    }
  };

  menu.querySelectorAll(".menu__item").forEach((item) => {
    const submenu = item.querySelector(".submenu");

    if (submenu) {
      allSubmenu.push(submenu);
      item.addEventListener("click", handlerClick);
    }
  });

  window.addEventListener("resize", handlerResize);
};

export default menuSpoilers;
