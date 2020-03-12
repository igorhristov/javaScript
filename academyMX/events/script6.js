const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const selCountry = document.querySelector('#country');
const postCode = document.querySelector('input[type=number]');
const terms = document.querySelector('input[type=checkbox]');
const email = document.querySelector('input[type=email]');
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function toInvalid(htmlElement) {
  htmlElement.classList.remove('is-valid');
  htmlElement.classList.add('is-invalid');
}

function toValid(htmlElement) {
  htmlElement.classList.remove('is-invalid');
  htmlElement.classList.add('is-valid');
}

form.addEventListener('submit', event => {
  event.preventDefault();
  inputs.forEach(input => (input.value.trim() === '' ? toInvalid(input) : toValid(input)));
  // !email.value.match(mailformat) ? toInvalid(email) : toValid(email);
  !mailformat.test(email.value) ? toInvalid(email) : toValid(email);
  postCode.value.trim() === '' ? toInvalid(postCode) : toValid(postCode);
  selCountry.value === '' ? toInvalid(selCountry) : toValid(selCountry);
  !terms.checked ? toInvalid(terms) : toValid(terms);
});

form.addEventListener('reset', _ => {
  inputs.forEach(input => input.classList.remove('is-valid', 'is-invalid'));
  selCountry.classList.remove('is-valid', 'is-invalid');
});
