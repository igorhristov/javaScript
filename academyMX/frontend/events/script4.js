const novEl = (type, attributes = {}) => {
  const element = document.createElement(type);
  Object.keys(attributes).forEach(key => {
    element[key] = attributes[key];
  });
  return element;
};
// fetch all the forms we want to apply custom style
const inputs = document.getElementsByClassName('form-control');
const form = document.querySelector('form');
// loop over each input and watch blue event
const validation = Array.prototype.filter.call(inputs, function(input) {
  input.addEventListener('blur', function(event) {
    // reset
    input.classList.remove('is-invalid');
    input.classList.remove('is-valid');

    if (!input.checkValidity()) {
      input.classList.add('is-invalid');
      input.after(
        novEl('div', {
          innerText: 'nevaliden vlez',
          classList: 'invalid-feedback',
          id: 'invalid-feedback1'
        })
      );
    } else {
      input.classList.add('is-valid');
      input.after(
        novEl('div', {
          innerText: 'izgleda dobro',
          classList: 'valid-feedback',
          id: 'valid-feedback1'
        })
      );
    }
  });
});

document.querySelector('button[type=reset]').addEventListener('reset', event => {
  document.querySelector('form').reset();
  /*
  form.reset();

  const validClass = document.querySelectorAll('valid-feedback');
  const inValidClass = document.querySelectorAll('invalid-feedback');
  const isValid = document.querySelectorAll('form-control');
  // const isInvalid = document.querySelectorAll('form-control');
console.log(isValid);
console.log(validClass);
[...isValid].map(x => x.classList.remove("is-valid"))
  // const removeElements = elms => elms.forEach(el => el.remove());

  // removeElements(validClass);
  // removeElements(inValidClass);

  // isValid.classList.remove("is-valid");
  // isInvalid.classList.remove("is-invalid");
  // validClass.style.visibility = 'hidden';
  // inValidClass.style.visibility = 'hidden';
  // return false;
  */
});
