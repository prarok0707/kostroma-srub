/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/checkbox.js":
/*!***********************************!*\
  !*** ./src/assets/js/checkbox.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst checkbox = () => {\r\n  const container = document.querySelector(\".filter__checkboxes\");\r\n\r\n  if (!container) return;\r\n\r\n  const inputs = container.querySelectorAll(\".filter__checkbox-input\");\r\n  inputs.forEach((input) => {\r\n    input.addEventListener(\"change\", handlerChecked);\r\n  });\r\n\r\n  function handlerChecked(event) {\r\n    if (this.name === \"size-all\") {\r\n      inputs.forEach((input) => {\r\n        if (input.name !== \"size-all\") {\r\n          input.checked = false;\r\n        }\r\n      });\r\n    } else {\r\n      container.querySelector(`#size-all`).checked = false\r\n    }\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (checkbox);\r\n\n\n//# sourceURL=webpack://settings/./src/assets/js/checkbox.js?");

/***/ }),

/***/ "./src/assets/js/filter-reset.js":
/*!***************************************!*\
  !*** ./src/assets/js/filter-reset.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst filterReset = () => {\r\n  const resetButton = document.querySelector(\".filter__reset\");\r\n\r\n  if (!resetButton) return;\r\n\r\n  resetButton.addEventListener(\"click\", handlerReset);\r\n\r\n  function handlerReset(event) {\r\n    event.preventDefault();\r\n\r\n    const form = this.closest(\"form\");\r\n    const scrollsItems = form.querySelectorAll(\".scrolls-filter__item\");\r\n    const checkboxes = form.querySelector(\".filter__checkboxes\");\r\n    const radioItems = form.querySelectorAll(\".filter__radio-group\");\r\n    \r\n    resetScrolls(scrollsItems);\r\n    resetCheckboxes(checkboxes);\r\n    resetRadio(radioItems);\r\n  }\r\n\r\n  function resetScrolls(scrolls) {\r\n    if (!scrolls.length) return;\r\n\r\n    scrolls.forEach((scroll) => {\r\n      const valueMin = scroll.querySelector(`[data-scrolls-value=\"min\"]`);\r\n      const valueMax = scroll.querySelector(`[data-scrolls-value=\"max\"]`);\r\n      const filling = scroll.querySelector(\"[data-scrolls-filling]\");\r\n      const thumbMin = scroll.querySelector(`[data-scrolls-thumb=\"min\"]`);\r\n      const thumbMax = scroll.querySelector(`[data-scrolls-thumb=\"max\"]`);\r\n      const input = scroll.querySelector(\"input\");\r\n\r\n      filling.removeAttribute(\"style\");\r\n      thumbMin.removeAttribute(\"style\");\r\n      thumbMax.removeAttribute(\"style\");\r\n\r\n      thumbMin.querySelector(\"span\").textContent = valueMin.textContent\r\n        .split(\".\")\r\n        .join(\" \");\r\n      thumbMax.querySelector(\"span\").textContent = valueMax.textContent\r\n        .split(\".\")\r\n        .join(\" \");\r\n\r\n      input.dataset.scrollsRangeMin = valueMin.textContent.split(\".\").join(\"\");\r\n      input.dataset.scrollsRangeMax = valueMax.textContent.split(\".\").join(\"\");\r\n    });\r\n  }\r\n\r\n  function resetCheckboxes(checkboxes) {\r\n    if (!checkboxes) return;\r\n    const inputs = checkboxes.querySelectorAll(\".filter__checkbox-input\");\r\n\r\n    if (!inputs.length) return;\r\n    inputs.forEach((input) => (input.checked = input.id === \"size-all\"));\r\n  }\r\n\r\n  function resetRadio(items) {\r\n    if (!items.length) return;\r\n    items.forEach((item) => (item.querySelector(\"input\").checked = false));\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (filterReset);\r\n\n\n//# sourceURL=webpack://settings/./src/assets/js/filter-reset.js?");

/***/ }),

/***/ "./src/assets/js/filter-scrolls.js":
/*!*****************************************!*\
  !*** ./src/assets/js/filter-scrolls.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst filterScrolls = () => {\r\n  const body = document.body;\r\n  const scrolls = body.querySelectorAll(\".scrolls-filter__item\");\r\n  let currentScrollValueMax;\r\n  let currentParentScroll;\r\n  let currentParentMetrics;\r\n  let currentThumb;\r\n  let shiftX;\r\n\r\n  if (!scrolls.length) return;\r\n\r\n  scrolls.forEach((scroll) => {\r\n    const scrollValueMin = scroll.querySelector(`[data-scrolls-value=\"min\"]`);\r\n    const scrollValueMax = scroll.querySelector(`[data-scrolls-value=\"max\"]`);\r\n\r\n    const scrollInputRange = scroll.querySelector(`.scrolls-filter__range`);\r\n\r\n    const thumbMin = scroll.querySelector(`[data-scrolls-thumb=\"min\"]`);\r\n    const thumbMax = scroll.querySelector(`[data-scrolls-thumb=\"max\"]`);\r\n\r\n    const thumbSpanMin = thumbMin.querySelector(`span`);\r\n    const thumbSpanMax = thumbMax.querySelector(`span`);\r\n\r\n    if (thumbSpanMin) {\r\n      thumbSpanMin.textContent = scrollValueMin\r\n        ? scrollValueMin.textContent.split(\".\").join(\" \")\r\n        : \"0\";\r\n      setFiletInputRange({\r\n        input: scrollInputRange,\r\n        thumb: thumbMin,\r\n      });\r\n    }\r\n    if (thumbSpanMax) {\r\n      thumbSpanMax.textContent = scrollValueMax\r\n        ? scrollValueMax.textContent.split(\".\").join(\" \")\r\n        : \"0\";\r\n      setFiletInputRange({\r\n        input: scrollInputRange,\r\n        thumb: thumbMax,\r\n      });\r\n    }\r\n\r\n    thumbMin.addEventListener(\"mousedown\", handlerMouseDown);\r\n    thumbMax.addEventListener(\"mousedown\", handlerMouseDown);\r\n\r\n    thumbMin.addEventListener(\"touchstart\", handlerMouseDown);\r\n    thumbMax.addEventListener(\"touchstart\", handlerMouseDown);\r\n  });\r\n\r\n  function getMetrics(elem) {\r\n    if (!elem) return null;\r\n\r\n    const width = elem.getBoundingClientRect().width;\r\n    const left = elem.getBoundingClientRect().left;\r\n    const top = elem.getBoundingClientRect().top;\r\n    const right = elem.getBoundingClientRect().right;\r\n\r\n    return {\r\n      width: width,\r\n      left: left,\r\n      top: top,\r\n      right: right,\r\n    };\r\n  }\r\n\r\n  function handlerMouseDown(event) {\r\n    event.preventDefault();\r\n    const touchEvent = event.__proto__.constructor.name;\r\n\r\n    if (touchEvent === \"TouchEvent\") {\r\n      event = event.touches[0];\r\n    }\r\n\r\n    currentThumb = this;\r\n    currentParentScroll = this.closest(`[data-scrolls]`);\r\n    currentScrollValueMax = currentParentScroll\r\n      .closest(\".scrolls-filter__item\")\r\n      .querySelector(`[data-scrolls-value=\"max\"]`).textContent;\r\n    currentParentMetrics = getMetrics(currentParentScroll);\r\n    shiftX = event.clientX - currentThumb.getBoundingClientRect().left;\r\n\r\n    if (!currentParentMetrics) return;\r\n\r\n    setFiletInputRange({\r\n      input: currentParentScroll.querySelector(`.scrolls-filter__range`),\r\n      thumb: currentThumb,\r\n    });\r\n\r\n    body.addEventListener(\"mousemove\", handlerMouseMove);\r\n    body.addEventListener(\"mouseup\", handlerMouseUp);\r\n\r\n    body.addEventListener(\"touchmove\", handlerMouseMove);\r\n    body.addEventListener(\"touchend\", handlerMouseUp);\r\n  }\r\n\r\n  function changeValueThumb(thumb, shiftNew) {\r\n    const span = thumb.querySelector(\"span\");\r\n    const maxValue = currentScrollValueMax.split(\".\").join(\"\");\r\n    const procentShift = Math.round(\r\n      (shiftNew * 100) / (currentParentMetrics.width - thumb.offsetWidth)\r\n    );\r\n    const value = Math.round(maxValue * (procentShift / 100));\r\n    let index = 1;\r\n\r\n    const result = String(value)\r\n      .split(\"\")\r\n      .map((val, currentIndex) => {\r\n        let res = `${val}`;\r\n\r\n        if (currentIndex === index) {\r\n          index += 3;\r\n          res += \" \";\r\n        }\r\n        return res;\r\n      })\r\n      .join(\"\");\r\n\r\n    span.textContent = result;\r\n  }\r\n\r\n  function setFiletInputRange(obj) {\r\n    const { input, thumb } = obj;\r\n    const range = thumb.querySelector(\"span\").textContent;\r\n\r\n    if (thumb.dataset.scrollsThumb === \"min\") {\r\n      input.dataset.scrollsRangeMin = range.split(\" \").join(\"\");\r\n    } else {\r\n      input.dataset.scrollsRangeMax = range.split(\" \").join(\"\");\r\n    }\r\n  }\r\n\r\n  function handlerMouseMove(event) {\r\n    const touchEvent = event.__proto__.constructor.name;\r\n\r\n    if (touchEvent === \"TouchEvent\") {\r\n      event = event.touches[0];\r\n    }\r\n\r\n    const thumbMin = currentParentScroll.querySelector(\r\n      `[data-scrolls-thumb=\"min\"]`\r\n    );\r\n    const thumbMax = currentParentScroll.querySelector(\r\n      `[data-scrolls-thumb=\"max\"]`\r\n    );\r\n    const scrollFilling = currentParentScroll.querySelector(\r\n      `[data-scrolls-filling]`\r\n    );\r\n    let shiftNew = event.clientX - shiftX - currentParentMetrics.left;\r\n    let xMin;\r\n    let xMax;\r\n\r\n    if (currentThumb === thumbMin) {\r\n      xMin = 0;\r\n      xMax =\r\n        thumbMax.getBoundingClientRect().left -\r\n        thumbMax.offsetWidth -\r\n        currentParentMetrics.left;\r\n\r\n      if (shiftNew <= xMin) shiftNew = xMin;\r\n      if (shiftNew >= xMax) shiftNew = xMax;\r\n\r\n      currentThumb.style.left = shiftNew + \"px\";\r\n      scrollFilling.style.left = shiftNew + \"px\";\r\n    } else {\r\n      xMin =\r\n        thumbMin.getBoundingClientRect().left +\r\n        thumbMin.offsetWidth -\r\n        currentParentMetrics.left;\r\n      xMax = currentParentScroll.offsetWidth - currentThumb.offsetWidth;\r\n\r\n      if (shiftNew <= xMin) shiftNew = xMin;\r\n      if (shiftNew >= xMax) shiftNew = xMax;\r\n\r\n      currentThumb.style.left = shiftNew + \"px\";\r\n      scrollFilling.style.right =\r\n        currentParentMetrics.width - shiftNew - currentThumb.offsetWidth + \"px\";\r\n    }\r\n\r\n    changeValueThumb(currentThumb, shiftNew);\r\n    setFiletInputRange({\r\n      input: currentParentScroll.querySelector(`.scrolls-filter__range`),\r\n      thumb: currentThumb,\r\n    });\r\n  }\r\n\r\n  function handlerMouseUp(event) {\r\n    this.removeEventListener(\"mousemove\", handlerMouseMove);\r\n    this.removeEventListener(\"touchmove\", handlerMouseMove);\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (filterScrolls);\r\n\n\n//# sourceURL=webpack://settings/./src/assets/js/filter-scrolls.js?");

/***/ }),

/***/ "./src/assets/js/footer-droplist.js":
/*!******************************************!*\
  !*** ./src/assets/js/footer-droplist.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst footerDroplist = () => {\r\n  const droplists = document.querySelector(\".footer-droplists\");\r\n  if (!droplists) return;\r\n\r\n  droplists.addEventListener(\"click\", (event) => {\r\n    if (document.body.offsetWidth >= 576) return\r\n\r\n    let target = event.target;\r\n    let list;\r\n    let listHeight;\r\n\r\n    if (!target.classList.contains(\"footer-droplists__btn\")) return;\r\n\r\n    list = target\r\n      .closest(\".footer-droplists__item\")\r\n      .querySelector(\".footer-droplists__list\");\r\n\r\n    if (!list.classList.contains(\"footer-droplists_active\")) {\r\n      target.classList.add(\"footer-droplists__btn_active\");\r\n      list.classList.add(\"footer-droplists_active\");\r\n      list.style.display = \"block\";\r\n\r\n      listHeight = list.offsetHeight + \"px\";\r\n\r\n      list.style.height = \"0px\";\r\n\r\n      setTimeout(() => {\r\n        list.style.height = listHeight;\r\n      });\r\n    } else {\r\n      list.style.height = \"0px\";\r\n\r\n      list.ontransitionend = () => {\r\n        target.classList.remove(\"footer-droplists__btn_active\");\r\n        list.classList.remove(\"footer-droplists_active\");\r\n        list.removeAttribute(\"style\");\r\n        list.ontransitionend = null;\r\n      };\r\n    }\r\n  });\r\n\r\n  window.addEventListener('resize', () => {\r\n    if (document.body.offsetWidth <= 576) return\r\n    if (!droplists.querySelector('.footer-droplists__btn_active')) return\r\n\r\n    const allBtnActive = droplists.querySelectorAll('.footer-droplists__btn_active')\r\n    const allListActive = droplists.querySelectorAll('.footer-droplists_active')\r\n\r\n    if (!allBtnActive.length || !allListActive.length) return \r\n    allBtnActive.forEach((elem, index) => {\r\n      elem.classList.remove('footer-droplists__btn_active')\r\n      allListActive[index].classList.remove('footer-droplists_active')\r\n      allListActive[index].removeAttribute('style')\r\n    })\r\n  })\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (footerDroplist);\r\n\n\n//# sourceURL=webpack://settings/./src/assets/js/footer-droplist.js?");

/***/ }),

/***/ "./src/assets/js/forms-file-input.js":
/*!*******************************************!*\
  !*** ./src/assets/js/forms-file-input.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst formsFileInput = () => {\r\n  const handlerInputFileChange = function (e) {\r\n    const parent = this.parentElement\r\n    const label = parent.querySelector('label')\r\n    let nameFile = ''\r\n    \r\n    if (!this.files.length) return\r\n\r\n    const fullNameFile = this.files[0].name;\r\n    \r\n    if (fullNameFile.split('.')[0].length && fullNameFile.split('').includes('.')) {\r\n      nameFile = fullNameFile\r\n        .split('')\r\n        .splice(0, fullNameFile.lastIndexOf('.'))\r\n        .join('')\r\n\r\n      nameFile = (nameFile.length > 10) ? nameFile.slice(0, 6) + '...' : nameFile\r\n    }\r\n\r\n    label.textContent = (nameFile.length) ? nameFile : label.textContent\r\n  }\r\n\r\n  Array.from(document.forms).forEach((form) => {\r\n    const inputFile = form.elements.file;\r\n\r\n    if (inputFile) {\r\n      inputFile.addEventListener('change', handlerInputFileChange)\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (formsFileInput);\r\n\n\n//# sourceURL=webpack://settings/./src/assets/js/forms-file-input.js?");

/***/ }),

/***/ "./src/assets/js/header-contact.js":
/*!*****************************************!*\
  !*** ./src/assets/js/header-contact.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst showHeaderContacts = function () {\r\n  const btn = document.querySelector('.header__contacts-show-btn')\r\n  const contacts = document.querySelector('.header__contacts')\r\n\r\n  if (!btn || !contacts) return\r\n\r\n  const contactsShow = () => {\r\n    contacts.classList.add('header-contacts-show')\r\n    const height = contacts.offsetHeight + 'px'\r\n\r\n    contacts.style.height = '0px'\r\n\r\n    setTimeout(() => {\r\n      contacts.style.height = height\r\n    })\r\n  }\r\n\r\n  const contactsClose = () => {\r\n    contacts.style.height = '0px'\r\n\r\n    contacts.ontransitionend = () => {\r\n      contacts.removeAttribute('style')\r\n      contacts.classList.remove('header-contacts-show')\r\n      contacts.ontransitionend = null\r\n    }\r\n  }\r\n\r\n  const handlerClick = (e) => {\r\n    if (!contacts.classList.contains('header-contacts-show')) {\r\n      contactsShow()\r\n    } else {\r\n      contactsClose()\r\n    }\r\n  }\r\n\r\n  const handlerResize = (e) => {\r\n    if (document.body.offsetWidth > 768) {\r\n      contacts.removeAttribute('style')\r\n      contacts.classList.remove('header-contacts-show')\r\n    }\r\n  }\r\n\r\n  btn.addEventListener('click', handlerClick)\r\n  window.addEventListener('resize', handlerResize)\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (showHeaderContacts);\n\n//# sourceURL=webpack://settings/./src/assets/js/header-contact.js?");

/***/ }),

/***/ "./src/assets/js/loaded-photos.js":
/*!****************************************!*\
  !*** ./src/assets/js/loaded-photos.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nclass LoadedPhotos {\r\n  constructor(object) {\r\n    this._selector;\r\n    this._allItems;\r\n    this._delay;\r\n\r\n    this._init(object);\r\n  }\r\n\r\n  _checkString(str) {\r\n    if (typeof str !== \"string\") throw new Error(`Not a string ${str}`);\r\n\r\n    return str;\r\n  }\r\n\r\n  _setAllItems() {\r\n    let items = document.body.querySelectorAll(this._selector);\r\n\r\n    if (!items.length) throw new Error(`Array is empty`);\r\n\r\n    this._allItems = items;\r\n\r\n    this._allItems.forEach((item) => {\r\n      const objDataItem = this._getSrcPhoto(item);\r\n      this._loaderPhotos(objDataItem);\r\n    });\r\n  }\r\n\r\n  _getSrcPhoto(elem) {\r\n    const img = elem.querySelector(\"img\");\r\n    const result = {\r\n      img: img,\r\n      src: null,\r\n      elem: elem,\r\n    };\r\n\r\n    if (!img) result.img = null;\r\n\r\n    result.src = img ? img.dataset.photoUrl : null;\r\n\r\n    return result;\r\n  }\r\n\r\n  async _loaderPhotos(objDataItem) {\r\n    const {img, src, elem} = objDataItem\r\n\r\n    elem.classList.add(\"loading\");\r\n\r\n    if (!img || !src) {\r\n      elem.classList.add(\"load-error\");\r\n      elem.classList.remove(\"loading\")\r\n      return\r\n    }\r\n\r\n    //Fetch - работает только при обращении на сервер!!!\r\n    //Попытка передать, локально, путь до файла, приведёт к ошибке! \r\n    //const answer = await fetch(src);\r\n    const url = src;\r\n\r\n    await new Promise((resolve, reject) => {\r\n      setTimeout(() => resolve(), this._delay);\r\n    });\r\n\r\n    // if (!answer.ok) {\r\n    //   elem.classList.add(\"load-error\");\r\n    // }\r\n\r\n    elem.classList.remove(\"loading\")\r\n    img.setAttribute(\"src\", url);\r\n  }\r\n\r\n  _init({selector, delay = 1000}) {\r\n    try {\r\n      this._selector = this._checkString(selector);\r\n      this._delay = delay;\r\n      this._setAllItems();\r\n    } catch (error) {\r\n      console.log(error);\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadedPhotos);\r\n\n\n//# sourceURL=webpack://settings/./src/assets/js/loaded-photos.js?");

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-contact */ \"./src/assets/js/header-contact.js\");\n/* harmony import */ var _menu_spoilers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-spoilers */ \"./src/assets/js/menu-spoilers.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/assets/js/menu.js\");\n/* harmony import */ var _footer_droplist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer-droplist */ \"./src/assets/js/footer-droplist.js\");\n/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals */ \"./src/assets/js/modals.js\");\n/* harmony import */ var _forms_file_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms-file-input */ \"./src/assets/js/forms-file-input.js\");\n/* harmony import */ var _filter_scrolls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter-scrolls */ \"./src/assets/js/filter-scrolls.js\");\n/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkbox */ \"./src/assets/js/checkbox.js\");\n/* harmony import */ var _filter_reset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter-reset */ \"./src/assets/js/filter-reset.js\");\n/* harmony import */ var _project_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project-slider */ \"./src/assets/js/project-slider.js\");\n/* harmony import */ var _photo_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./photo-slider */ \"./src/assets/js/photo-slider.js\");\n/* harmony import */ var _loaded_photos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loaded-photos */ \"./src/assets/js/loaded-photos.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", (e) => {\r\n  (0,_header_contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  (0,_menu_spoilers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  (0,_footer_droplist__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  (0,_modals__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n  (0,_forms_file_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n  (0,_filter_scrolls__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n  (0,_checkbox__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n  (0,_filter_reset__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n  (0,_project_slider__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n  (0,_photo_slider__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n\r\n  const loaded = new _loaded_photos__WEBPACK_IMPORTED_MODULE_11__[\"default\"]({\r\n    selector: '.project-photos__preview',\r\n  })\r\n});\r\n\n\n//# sourceURL=webpack://settings/./src/assets/js/main.js?");

/***/ }),

/***/ "./src/assets/js/menu-spoilers.js":
/*!****************************************!*\
  !*** ./src/assets/js/menu-spoilers.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst menuSpoilers = () => {\r\n  const menu = document.querySelector(\".menu\");\r\n  const allSubmenu = [];\r\n  if (!menu) return;\r\n\r\n  const handlerClick = ({ target }) => {\r\n    if (!target.classList.contains(\"menu__link\")) return;\r\n\r\n    const submenu = target.nextElementSibling;\r\n\r\n    if (!submenu.classList.contains(\"submenu-show\")) {\r\n      submenu.classList.add(\"submenu-show\");\r\n      const height = submenu.offsetHeight + \"px\";\r\n      submenu.style.height = \"0px\";\r\n\r\n      setTimeout(() => {\r\n        submenu.style.height = height;\r\n      });\r\n    } else {\r\n      submenu.style.height = \"0px\";\r\n\r\n      submenu.ontransitionend = () => {\r\n        submenu.removeAttribute(\"style\");\r\n        submenu.classList.remove(\"submenu-show\");\r\n        submenu.ontransitionend = null;\r\n      };\r\n    }\r\n  };\r\n\r\n  const handlerResize = (e) => {\r\n    if (document.body.offsetWidth > 1200) {\r\n      if (!allSubmenu.length) return;\r\n\r\n      allSubmenu.forEach((submenu) => {\r\n        submenu.removeAttribute(\"style\");\r\n        submenu.classList.remove(\"submenu-show\");\r\n      });\r\n    }\r\n  };\r\n\r\n  menu.querySelectorAll(\".menu__item\").forEach((item) => {\r\n    const submenu = item.querySelector(\".submenu\");\r\n\r\n    if (submenu) {\r\n      allSubmenu.push(submenu);\r\n      item.addEventListener(\"click\", handlerClick);\r\n    }\r\n  });\r\n\r\n  window.addEventListener(\"resize\", handlerResize);\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (menuSpoilers);\r\n\n\n//# sourceURL=webpack://settings/./src/assets/js/menu-spoilers.js?");

/***/ }),

/***/ "./src/assets/js/menu.js":
/*!*******************************!*\
  !*** ./src/assets/js/menu.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst menu = () => {\r\n  const menu = document.querySelector('.menu')\r\n  if (!menu) return\r\n\r\n  const handlerClick = (e) => {\r\n    menu.classList.toggle('menu-show')\r\n    document.body.classList.toggle('no-scroll')\r\n  }\r\n\r\n  document.querySelectorAll('[data-menu-burger]').forEach(btn => {\r\n    btn.addEventListener('click', handlerClick)\r\n  })\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\r\n\n\n//# sourceURL=webpack://settings/./src/assets/js/menu.js?");

/***/ }),

/***/ "./src/assets/js/modals.js":
/*!*********************************!*\
  !*** ./src/assets/js/modals.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst modals = () => {\r\n  const body = document.body\r\n  const callModalButtons = body.querySelectorAll(\"[data-modal-call]\");\r\n  let currentModal;\r\n  let buttonCloseModal;\r\n\r\n  if (!callModalButtons.length) return;\r\n\r\n  const showModal = ({ target }) => {\r\n    const nameModal = target.dataset.modalCall;\r\n    currentModal = body.querySelector(`[data-modal-name=\"${nameModal}\"]`);\r\n\r\n    if (!currentModal) return;\r\n\r\n    buttonCloseModal = currentModal.querySelector(\".modal__close-button\");\r\n\r\n    currentModal.classList.add(\"modal_show\");\r\n\r\n    if (!body.classList.contains('no-scroll')) {\r\n      body.classList.add('no-scroll')\r\n    }\r\n\r\n    currentModal.addEventListener(\"click\", modalHidden);\r\n  };\r\n\r\n  const modalHidden = function ({ target }) {\r\n    let close = target === currentModal || target === buttonCloseModal;\r\n\r\n    if (close) {\r\n      this.classList.remove(\"modal_show\");\r\n      body.classList.remove('no-scroll')\r\n    }\r\n  };\r\n\r\n  Array.from(callModalButtons).forEach((button) => {\r\n    button.addEventListener(\"click\", showModal);\r\n  });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (modals);\r\n\n\n//# sourceURL=webpack://settings/./src/assets/js/modals.js?");

/***/ }),

/***/ "./src/assets/js/photo-slider.js":
/*!***************************************!*\
  !*** ./src/assets/js/photo-slider.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loaded_photos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loaded-photos */ \"./src/assets/js/loaded-photos.js\");\n\r\n\r\n\r\nconst photoSlider = () => {\r\n  const slider = document.body.querySelector(\".photo-slider\");\r\n\r\n  if (!slider) return;\r\n\r\n  const arrPhotoUrl = document.body.querySelectorAll(\"[data-photo-slider-url]\");\r\n  const wrapper = slider.querySelector(\".photo-slider__wrapper\");\r\n  let swiper;\r\n  let loaded;\r\n\r\n  arrPhotoUrl.forEach((elem, index) => {\r\n    elem.addEventListener(\"click\", handlerShowSlider);\r\n    elem.setAttribute(\"data-photo-slider-index\", index + 1);\r\n\r\n    const url = elem.dataset.photoSliderUrl;\r\n    const slide = `\r\n      <div class=\"swiper-slide\">\r\n        <div class=\"photo-slider__image image\">\r\n          <img\r\n            data-photo-url=\"${url}\"\r\n            alt=\"Photo\"\r\n          />\r\n        </div>\r\n      </div>\r\n    `;\r\n\r\n    wrapper.insertAdjacentHTML(\"beforeend\", slide);\r\n  });\r\n\r\n  swiper = new Swiper(\".photo-slider__swiper\", {\r\n    slidesPerView: 1,\r\n    spaceBetween: 15,\r\n    loop: true,\r\n    grabCursor: true,\r\n    pagination: {\r\n      el: \".photo-slider__pagination\",\r\n      type: \"fraction\",\r\n    },\r\n    navigation: {\r\n      nextEl: \".photo-slider-button-next\",\r\n      prevEl: \".photo-slider-button-prev\",\r\n    },\r\n  });\r\n\r\n  loaded = new _loaded_photos__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    selector: \".photo-slider__image\",\r\n    delay: 2000,\r\n  });\r\n\r\n  slider.addEventListener(\"click\", function (e) {\r\n    const target = e.target;\r\n\r\n    if (target === this || target.closest(\".photo-slider__button-close\")) {\r\n      this.classList.remove(\"photo-slider_show\");\r\n    }\r\n  });\r\n\r\n  function handlerShowSlider(event) {\r\n    const index = this.dataset.photoSliderIndex;\r\n    swiper.slideTo(index, 0);\r\n    slider.classList.add(\"photo-slider_show\");\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (photoSlider);\n\n//# sourceURL=webpack://settings/./src/assets/js/photo-slider.js?");

/***/ }),

/***/ "./src/assets/js/project-slider.js":
/*!*****************************************!*\
  !*** ./src/assets/js/project-slider.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst projectSlider = () => {\r\n  const projectSlider = new Swiper(\".slider-project\", {\r\n    slidesPerView: 1,\r\n    navigation: {\r\n      nextEl: \".slider-project__btn_next\",\r\n      prevEl: \".slider-project__btn_prev\",\r\n    },\r\n    loop: true,\r\n    grabCursor: true,\r\n\r\n    breakpoints: {\r\n      768: {\r\n        loop: false,\r\n      },\r\n    },\r\n  });\r\n\r\n  const projectSubslider = new Swiper(\".subslider-project\", {\r\n    slidesPerView: 4,\r\n    spaceBetween: 30,\r\n    pagination: {\r\n      el: \".swiper-pagination\",\r\n      clickable: true,\r\n    },\r\n    observer: true,\r\n\r\n    breakpoints: {\r\n      1200: {\r\n        slidesPerView: 7,\r\n      },\r\n      992: {\r\n        slidesPerView: 5,\r\n      },\r\n    },\r\n\r\n    on: {\r\n      init: function () {\r\n        if (this.slides.length) {\r\n          this.slides[0].classList.add(\"swiper-slide_active\");\r\n        }\r\n      },\r\n    },\r\n  });\r\n\r\n  projectSlider.on(\"slideChange\", function (swiper) {\r\n    const activeIndex = swiper.activeIndex;\r\n    projectSubslider.slideTo(activeIndex);\r\n\r\n    projectSubslider.slides.forEach((item, index) => {\r\n      item.classList.remove(\"swiper-slide_active\");\r\n\r\n      if (activeIndex === index) {\r\n        item.classList.add(\"swiper-slide_active\");\r\n      }\r\n    });\r\n  });\r\n\r\n  projectSubslider.on(\"click\", function (swiper) {\r\n    const clickedIndex = swiper.clickedIndex;\r\n    projectSlider.slideTo(clickedIndex);\r\n  });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (projectSlider);\r\n\n\n//# sourceURL=webpack://settings/./src/assets/js/project-slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/assets/js/checkbox.js");
/******/ 	__webpack_require__("./src/assets/js/filter-reset.js");
/******/ 	__webpack_require__("./src/assets/js/filter-scrolls.js");
/******/ 	__webpack_require__("./src/assets/js/footer-droplist.js");
/******/ 	__webpack_require__("./src/assets/js/forms-file-input.js");
/******/ 	__webpack_require__("./src/assets/js/header-contact.js");
/******/ 	__webpack_require__("./src/assets/js/loaded-photos.js");
/******/ 	__webpack_require__("./src/assets/js/main.js");
/******/ 	__webpack_require__("./src/assets/js/menu-spoilers.js");
/******/ 	__webpack_require__("./src/assets/js/menu.js");
/******/ 	__webpack_require__("./src/assets/js/modals.js");
/******/ 	__webpack_require__("./src/assets/js/photo-slider.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/project-slider.js");
/******/ 	
/******/ })()
;