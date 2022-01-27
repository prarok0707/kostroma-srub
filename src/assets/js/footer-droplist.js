"use strict";

const footerDroplist = () => {
  const droplists = document.querySelector(".footer-droplists");
  if (!droplists) return;

  droplists.addEventListener("click", (event) => {
    if (document.body.offsetWidth >= 576) return

    let target = event.target;
    let list;
    let listHeight;

    if (!target.classList.contains("footer-droplists__btn")) return;

    list = target
      .closest(".footer-droplists__item")
      .querySelector(".footer-droplists__list");

    if (!list.classList.contains("footer-droplists_active")) {
      target.classList.add("footer-droplists__btn_active");
      list.classList.add("footer-droplists_active");
      list.style.display = "block";

      listHeight = list.offsetHeight + "px";

      list.style.height = "0px";

      setTimeout(() => {
        list.style.height = listHeight;
      });
    } else {
      list.style.height = "0px";

      list.ontransitionend = () => {
        target.classList.remove("footer-droplists__btn_active");
        list.classList.remove("footer-droplists_active");
        list.removeAttribute("style");
        list.ontransitionend = null;
      };
    }
  });

  window.addEventListener('resize', () => {
    if (document.body.offsetWidth <= 576) return
    if (!droplists.querySelector('.footer-droplists__btn_active')) return

    const allBtnActive = droplists.querySelectorAll('.footer-droplists__btn_active')
    const allListActive = droplists.querySelectorAll('.footer-droplists_active')

    if (!allBtnActive.length || !allListActive.length) return 
    allBtnActive.forEach((elem, index) => {
      elem.classList.remove('footer-droplists__btn_active')
      allListActive[index].classList.remove('footer-droplists_active')
      allListActive[index].removeAttribute('style')
    })
  })
};

export default footerDroplist;
