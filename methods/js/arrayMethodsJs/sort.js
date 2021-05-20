document.querySelector("#exampleOne").addEventListener("click", giveAnswerOne);
let letters = ["A", "R", "N", "A", "L", "D", "O"];
document.querySelector("#answerOne").innerHTML = letters;
function giveAnswerOne() {
  letters.sort()
  document.querySelector("#answerOne").innerHTML = letters
}

document.querySelector("#exampleTwo").addEventListener("click", giveAnswerTwo);
let names = ['Robert', 'Albert', 'Timmy', 'Ben', 'Ruby', 'Sarah'];
document.querySelector("#answerTwo").innerHTML = names;
function giveAnswerTwo() {
  names.sort();
  document.querySelector("#answerTwo").innerHTML = names;
}

document.querySelector("#exampleThree").addEventListener("click", giveAnswerThree);
let food = ["Pie", "Apple", "Popcorn", "Ice Cream", "Pasta", "Burger"];
document.querySelector("#answerThree").innerHTML = food;
function giveAnswerThree() {
  food.sort();
  document.querySelector("#answerThree").innerHTML = food;
}
