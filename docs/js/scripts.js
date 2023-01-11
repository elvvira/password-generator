const formElement = document.getElementById('form');
const lenghtElement = document.getElementById('lenght');
const buttonElement = document.getElementById('button');
const rangeElement = document.getElementById('range');
const passwordElement = document.getElementById('password');

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
  const aleatory = []
  const abc = 'abcdefghijklmnopqrstuvwxyz'

  for (let index = 0; index < value; index++) {
    const randomLetter = Math.floor(Math.random()* 27)
    aleatory.push(abc.charAt(randomLetter))
  }
  console.log(aleatory)

  passwordElement.textContent = aleatory
};


buttonElement.addEventListener('click', e => {
  
})


