"use strict";

const formsFileInput = () => {
  const handlerInputFileChange = function (e) {
    const parent = this.parentElement
    const label = parent.querySelector('label')
    let nameFile = ''
    
    if (!this.files.length) return

    const fullNameFile = this.files[0].name;
    
    if (fullNameFile.split('.')[0].length && fullNameFile.split('').includes('.')) {
      nameFile = fullNameFile
        .split('')
        .splice(0, fullNameFile.lastIndexOf('.'))
        .join('')

      nameFile = (nameFile.length > 10) ? nameFile.slice(0, 6) + '...' : nameFile
    }

    label.textContent = (nameFile.length) ? nameFile : label.textContent
  }

  Array.from(document.forms).forEach((form) => {
    const inputFile = form.elements.file;

    if (inputFile) {
      inputFile.addEventListener('change', handlerInputFileChange)
    }
  });
};

export default formsFileInput;
