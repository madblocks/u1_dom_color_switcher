// Write your DOM code here!

let redButton = document.querySelector('a.red')
let whiteButton = document.querySelector('a.white')
let blueButton = document.querySelector('a.blue')
let yellowButton = document.querySelector('a.yellow')
redButton.addEventListener('click', () => {document.body.setAttribute('class','red')})
whiteButton.addEventListener('click', () => {document.body.setAttribute('class','white')})
blueButton.addEventListener('click', () => {document.body.className = 'blue'})
yellowButton.addEventListener('click', () => {document.body.setAttribute('class', yellowButton.classList.value)})

let colorButton = document.getElementById('colorButton')
colorButton.addEventListener('click', createButton)

function changeColor() {
  let colorChoice = prompt('Choose one of the colors from above: \n\nred, white, blue or yellow')
  document.body.className = colorChoice
}

function createButton() {
  newColorButton = document.createElement('li')
  document.querySelector('#buttonList').appendChild(newColorButton)
}