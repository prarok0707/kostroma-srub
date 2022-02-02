"use strict";

class LoadedPhotos {
  constructor(selector) {
    this._selector;
    this._allItems;

    this._init(selector);
  }

  _checkString(str) {
    if (typeof str !== "string") throw new Error(`Not a string ${str}`);

    this._selector = str;
  }

  _setAllItems() {
    let items = document.body.querySelectorAll(this._selector);

    if (!items.length) throw new Error(`Array is empty`);

    this._allItems = items;

    this._allItems.forEach((item) => {
      const objDataItem = this._getSrcPhoto(item);
      this._loaderPhotos(objDataItem);
    });
  }

  _getSrcPhoto(elem) {
    const img = elem.querySelector("img");
    const result = {
      img: img,
      src: null,
      elem: elem,
    };

    if (!img) result.img = null;

    result.src = img ? img.dataset.photoSrc : null;

    return result;
  }

  async _loaderPhotos(objDataItem) {
    const {img, src, elem} = objDataItem

    elem.classList.add("loading");

    if (!img || !src) {
      elem.classList.add("load-error");
      elem.classList.remove("loading")
      return
    }

    //Fetch - работает только при обращении на сервер!!!
    //Попытка передать, локально, путь до файла, приведёт к ошибке! 
    //const answer = await fetch(src);
    const url = src;

    await new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 2000);
    });

    // if (!answer.ok) {
    //   elem.classList.add("load-error");
    // }

    elem.classList.remove("loading")
    img.setAttribute("src", url);
  }

  _init(selector) {
    try {
      this._checkString(selector);
      this._setAllItems();
    } catch (error) {
      console.log(error);
    }
  }
}

export default LoadedPhotos;