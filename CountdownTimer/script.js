var daysE1 = document.getElementById('days')
var hoursE1 = document.getElementById('hours')
var minsE1 = document.getElementById('mins')
var secondsE1 = document.getElementById('seconds')
document.getElementById('date').innerHTML = Date()

const newYears = '1 jan 2022'
console.log(Date(newYears))
function countdown() {
  var newYearsDate = new Date(newYears)
  var currentDate = new Date()
  var totalseconds = (newYearsDate - currentDate) / 1000
  var days = Math.floor(totalseconds / 3600 / 24)
  var hours = Math.floor(totalseconds / 3600) % 24
  var mins = Math.floor(totalseconds / 60) % 60
  var seconds = Math.floor(totalseconds) % 60

  daysE1.innerHTML = days
  hoursE1.innerHTML = hours
  minsE1.innerHTML = mins
  secondsE1.innerHTML = seconds
}
function formatTime(time) {
  return time < 10 ? '0${time}' : time
}

countdown()

setInterval(countdown, 1000)
