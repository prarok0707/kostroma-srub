import showHeaderContacts from "./header-contact";
import menuSpoilers from "./menu-spoilers";
import menu from "./menu";
import footerDroplist from "./footer-droplist";
import modals from "./modals";
import formsFileInput from "./forms-file-input";
import filterScrolls from "./filter-scrolls";
import checkbox from "./checkbox";
import filterReset from "./filter-reset";
import projectSlider from "./project-slider";
import photoSlider from './photo-slider'
import LoadedPhotos from './loaded-photos'
import PostForm from './post-form'

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
  projectSlider();
  photoSlider();

  const postForm = new PostForm()

  const projectPhotos = new LoadedPhotos({
    selector: '.project-photos__preview',
  })

  const commitPhoto = new LoadedPhotos({
    selector: '.comment__preview',
  })
});
