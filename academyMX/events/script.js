window.addEventListener('load', () => {
  const novEl = (type, attributes = {}) => {
    const element = document.createElement(type);

    Object.keys(attributes).forEach(key => {
      element[key] = attributes[key];
    });
    return element;
  };
  // Grab all the forms
  var forms = document.getElementsByClassName('form-control');
  // Iterate over each one
  for (let form of forms) {
    // Add a 'submit' event listener on each one
    form.addEventListener('submit', evt => {
      // check if the form input elements have the 'required' attribute
      if (!form.checkValidity()) {
        evt.preventDefault();
        evt.stopPropagation();
        console.log('Bootstrap will handle incomplete form fields');
      } else {
        // Since form is now valid, prevent default behavior..
        evt.preventDefault();
        novEl('div', {
          className: 'valid-feedback',
          textContent: 'Dobro Izgleda'
        });
        console.info('All form fields are now valid...');
      }

      form.classList.add('was-validated');
    });
  }
});

/*
const VALID = novEl('div', {
  className: 'valid-feedback',
  textContent: 'Dobro Izgleda'
});
const INVALID = novEl('div', {
  className: 'invalid-feedback',
  textContent: 'Please enter a valid email address.'
});
const form = document.getElementsByTagName('form');
const fname = document.getElementById('firstName');
fname.after(VALID);
const VALIDATION = async event => {
  event.preventDefault();
  console.log(event.target);

  const fname = document.getElementById('firstName');
  const lname = document.getElementById('lastName');
  const firstName = document.querySelector('#firstName');
  if (fname.value.length < 3) {
  }
};
document.addEventListener('submit', VALIDATION);
*/
