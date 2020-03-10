const novEl = (type, attributes = {}) => {
  const element = document.createElement(type);

  Object.keys(attributes).forEach(key => {
    element[key] = attributes[key];
  });
  return element;
};
const forms = document.getElementsByClassName('form-control');

const VALID = novEl('div', {
  className: 'valid-feedback',
  textContent: 'Dobro Izgleda'
});
const INVALID = novEl('div', {
  className: 'invalid-feedback',
  textContent: `Please enter a valid name.`
});
const submitBTN = document.querySelector('[type=submit]');

const fname = document.querySelector('#firstName');
fname.addEventListener('submi', event => {
  if (fname.checkValidity() === false) {
    fname.classList.add('is-invalid');
    fname.after(INVALID);
    
  } else {
    fname.classList.add('is-valid');

    fname.after(VALID);
  }
});

const resetBtn = document.querySelector('[type=reset]');
resetBtn.addEventListener('click', event => {
  fname.classList.remove('is-invalid');
  fname.classList.remove('is-valid');
});

console.log(resetBtn);
