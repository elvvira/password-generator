const formElement = document.getElementById('form');
const lenghtElement = document.getElementById('lenght');
const buttonElement = document.getElementById('button');
const rangeElement = document.getElementById('range');
const passwordElement = document.getElementById('password');
const uppercaseCheck = document.getElementById('uppercase');
const lowercaseCheck = document.getElementById('lowercase');
const numbersCheck = document.getElementById('numbers');
const symbolsCheck = document.getElementById('symbols');
const strenght = document.getElementById('strenght');
const allCheckBoxes = document.querySelectorAll('input[type="checkbox"]');

let valueLenght = 0;
let charactersAllowed = '';
let passwordFinal = '';

const abc = 'abcdefghijklmnopqrstuvwxyz';
const abcUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const number = '1234567890';
const symbols = '!"·$%&/()=?¿*^Ç¨_';

const filterCheckbox = () => {
  const checkboxChecked = [];
  for (const checkBox of allCheckBoxes) {
    if (checkBox.checked) {
      checkboxChecked.push(checkBox);
    }
  }
  return checkboxChecked;
};

const generateWord = () => {
  passwordFinal = '';
  for (let index = 0; index < valueLenght; index++) {
    const randomPassword = Math.floor(Math.random() * charactersAllowed.length);
    passwordFinal += charactersAllowed.charAt(randomPassword);
  }
  // console.log(passwordFinal);
};

formElement.addEventListener('change', event => {
  if (event.target.id === 'range') {
    lenghtElement.textContent = event.target.value;
    valueLenght = event.target.value;
  }

  charactersAllowed = '';

  if (uppercaseCheck.checked) {
    charactersAllowed += abcUpper;
  }
  if (lowercaseCheck.checked) {
    charactersAllowed += abc;
  }
  if (numbersCheck.checked) {
    charactersAllowed += number;
  }
  if (symbolsCheck.checked) {
    charactersAllowed += symbols;
  }

  passwordElement.textContent = charactersAllowed;

  if (rangeElement.value <= 5) {
    strenght.textContent = 'TOO SHORT';
    buttonElement.setAttribute('disabled', true);
  } else {
    strenght.textContent = 'TOO WEAK';
    buttonElement.removeAttribute('disabled');
  }

  if (rangeElement.value > 5 && filterCheckbox().length === 0) {
    strenght.textContent = 'NO OPTIONS CHECKED';
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.removeAttribute('disabled');
  }

  if (filterCheckbox().length === 1) {
    strenght.textContent = 'TOO WEAK';
  } else if (filterCheckbox().length === 2) {
    strenght.textContent = 'WEAK';
  } else if (filterCheckbox().length === 3) {
    strenght.textContent = 'MEDIUM';
  } else if (filterCheckbox().length === 4) {
    strenght.textContent = 'STRENGTH';
  }
});

buttonElement.addEventListener('click', e => {
  generateWord();
});

formElement.addEventListener('submit', event => {
  event.preventDefault();
  passwordElement.value = passwordFinal;
});
