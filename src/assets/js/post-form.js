"use strict";

class PostForm {
  constructor() {
    this._isRedy = true;

    this._init();
  }

  _handlerSubmit(event) {
    event.preventDefault();
    const currentForm = event.target;
    const elements = Array.from(currentForm.elements);
    const objName = this._getValue(elements);
    this._submit(objName).then(() => currentForm.reset());
  }

  _inputValid(event) {
    const target = event.target;
    const value = target.value;
    
    if (
      target.type === "checkbox" ||
      target.type === "radio" ||
      target.type === "submit"
    )
      return;

    if (value.length <= 5) {
      target.classList.add("input-error");
      this._isRedy = false;
      return;
    }
    target.classList.remove("input-error");
    this._isRedy = true;
  }

  _getValue(elements) {
    if (!elements.length) throw new Error(`Array elements is empty`);
    const notValidInputs = [];
    let result = elements.reduce((acc, element) => {
      if (element.type === "submit" || element.name === "filter-reset")
        return acc;

      const name = element.name || "no-name";
      let value =
        this._inputCheckboxValue(element) ||
        this._inputRadioValue(name, element, acc) ||
        this._inputRangeValue(element) ||
        element.value ||
        null;

      if (name !== "file" && !value) notValidInputs.push(element);

      acc[name] = value;

      return acc;
    }, {});

    console.log(result);
    if (notValidInputs.length) {
      notValidInputs.forEach((elem) => elem.classList.add("input-error"));
      this._isRedy = false;
    }

    return result;
  }

  _inputRangeValue(input) {
    if (!input.classList.contains("scrolls-filter__range")) return null;

    const valueMin = input.dataset.scrollsRangeMin;
    const valueMax = input.dataset.scrollsRangeMax;
    const result = `${valueMin}|${valueMax}`;

    return result;
  }

  _inputRadioValue(name, input, obj) {
    if (input.type !== "radio") return null;
    let value = "all";

    if (obj[`${name}`]) return obj[`${name}`];

    const radioList = input.closest(".filter__radio-list");
    const inputs = radioList.querySelectorAll("input");
    const result = Array.from(inputs).find((input) => input.checked);
    value = result ? result.id : value;
    return value;
  }

  _inputCheckboxValue(input) {
    if (input.type !== "checkbox") return null;

    const result = input.checked ? "on" : "off";

    return result;
  }

  async _submit(obj) {
    if (!this._isRedy) throw new Error(`Form not redy for submit!`);

    const body = JSON.stringify(obj);

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: body,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok)
      throw new Error(`Request form to failed! ${response.status}`);

    console.log(`Form submit!`, obj);
  }

  _init() {
    try {
      const forms = Array.from(document.forms);

      forms.forEach((form) => {
        const elements = Array.from(form.elements);

        elements.forEach((element) => {
          element.addEventListener("input", this._inputValid.bind(this));
        });

        form.addEventListener("submit", this._handlerSubmit.bind(this));
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default PostForm;
