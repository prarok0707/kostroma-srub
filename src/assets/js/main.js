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
import LoadedPhotos from './loaded-photos'

document.addEventListener("DOMContentLoaded", (e) => {
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

  const loaded = new LoadedPhotos('.project-photos__preview')
});
