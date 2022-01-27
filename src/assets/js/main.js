import { test1 } from "./test";
import showHeaderContacts from "./header-contact";
import menuSpoilers from "./menu-spoilers";
import menu from "./menu";
import footerDroplist from "./footer-droplist";
import modals from "./modals";
import formsFileInput from "./forms-file-input";
import filterScrolls from "./filter-scrolls";
import checkbox from "./checkbox";
import filterReset from "./filter-reset";
import slider from "./slider";

document.addEventListener("DOMContentLoaded", (e) => {
  console.log(test1(3));
  showHeaderContacts();
  menu();
  menuSpoilers();
  footerDroplist();
  modals();
  formsFileInput();
  filterScrolls();
  checkbox();
  filterReset();
  slider();
});
