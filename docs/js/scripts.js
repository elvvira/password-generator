const formElement = document.getElementById('form');
const lenghtElement = document.getElementById('lenght');
const buttonElement = document.getElementById('button');
const rangeElement = document.getElementById('range');

let valueLenght = 0;

formElement.addEventListener('submit', event => {
  event.preventDefault();
});

formElement.addEventListener('change', event => {
  lenghtElement.textContent = event.target.value;
  valueLenght = event.target.value;
  generateWord(valueLenght);
});

const generateWord = value => {
  for (let index = 0; index <= value; index++) {
    console.log(index);
  }
};
