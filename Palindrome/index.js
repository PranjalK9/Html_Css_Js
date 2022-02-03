var countdownElement = document.getElementById('countdown')

var initiaCountdownVal = countdownElement.innerHTML

var interval = setInterval(function () {
  countdownElement.style.fontSize = initiaCountdownVal * 100 + 'px'
  initiaCountdownVal = initiaCountdownVal > 0 ? initiaCountdownVal - 1 : 0
  countdownElement.innerHTML = initiaCountdownVal

  console.log(initiaCountdownVal * 100 + 'px')

  if (initiaCountdownVal <= 0) {
    clearInterval(interval)
  }
}, 1000)
var btn = document.getElementById('btn-clicked')
var mn = document.querySelector('header div')
var bc = document.getElementById('bc')

function onButtonClick() {
  alert(
    'rgb(' +
      Math.floor(Math.random() * 255) +
      ',' +
      Math.floor(Math.random() * 255) +
      ',' +
      Math.floor(Math.random() * 255) +
      ')',
  )
  mn.style.backgroundColor =
    'rgb(' +
    Math.floor(Math.random() * 255) +
    ',' +
    Math.floor(Math.random() * 255) +
    ',' +
    Math.floor(Math.random() * 255) +
    ')'
}

btn.addEventListener('click', onButtonClick)
var btnIncreseFont = document.getElementById('')
