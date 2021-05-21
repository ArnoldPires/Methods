document.querySelector("#exampleOne").addEventListener("click", giveAnswerOne);
function canVote(age) {
  return age >= 18;
}
function giveAnswerOne() {
  let filtered = [15, 24, 56, 17, 19, 44, 36].filter(canVote);
  document.querySelector("#answerOne").innerHTML = filtered;
}

document.querySelector("#exampleTwo").addEventListener("click", giveAnswerTwo);
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
function giveAnswerTwo() {
  let workingDays = days.filter(days => days.length > 6)
  document.querySelector('#answerTwo').innerHTML = workingDays
}

document.querySelector("#exampleThree").addEventListener("click", giveAnswerThree);
function overTen(value) {
  return value >= 10
}
let ages = [3, 6, 7, 14, 29, 31, 76]
function giveAnswerThree(value) {
  let ages = [3, 6, 7, 14, 29, 31, 76].filter(overTen)
  document.querySelector('#answerThree').innerHTML = ages
}