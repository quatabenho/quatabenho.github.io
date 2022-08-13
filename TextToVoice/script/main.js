// Lam cho nut bat dau phat sang
const startIcon = document.querySelector('#content #welcome .circle ion-icon')
const listColors = ['red', 'blue', 'yellow']
const welcomeBox = document.getElementById('welcome')
const startBox = document.getElementById('start')
var index = 0
setInterval(() => {
  console.log(startIcon)
  startIcon.style.filter = `drop-shadow(0px 0px 10px ${listColors[index]}) drop-shadow(0px 0px 20px ${listColors[index]})`
  index++
  if (index == listColors.length) {
    index = 0
  }
}, 300)

// lam cho chu phat sang
const chars = document.querySelectorAll('#content #welcome .author span')

var indexOfChar = 0
setInterval(() => {
  chars.forEach((e) => {
    e.style.fontSize = '16px'
  })
  chars[indexOfChar].style.fontSize = '25px'
  indexOfChar++
  if (indexOfChar == chars.length) {
    indexOfChar = 0
  }
}, 200)

// Bat dau chuong trinh
startIcon.addEventListener('click', (e) => {
  welcomeBox.style.opacity = '0'
  startBox.style.zIndex = '1'
})

// Quay lai trang truoc
const back = document.querySelector('#content #start .back')
back.addEventListener('click', (e) => {
  welcomeBox.style.opacity = '1'
  startBox.style.zIndex = '-1'
})

// Chuyen van ban thanh giong noi
const textArea = document.querySelector('#content #start textarea')
var value = ''
textArea.addEventListener('keyup', (e) => {
  value = e.target.value
})

const getVoiceBtn = document.querySelector('#content #start .get-voice')
getVoiceBtn.addEventListener('click', (e) => {
  const objectSpeech = new SpeechSynthesisUtterance(value)
  speechSynthesis.speak(objectSpeech)
})