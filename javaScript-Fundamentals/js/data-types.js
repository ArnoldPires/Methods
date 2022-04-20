document.querySelector('#number').addEventListener("click", showNumber);
function showNumber() {
  let whatsYourNumber = "Whats your number? ";
  message = 123456789;
  alert(whatsYourNumber + message)
}
document.querySelector('#string').addEventListener("click", showString);
function showString() {
  let stringOne = "Hello I am a string,";
  let stringTwo = " And I am another string!";
  let stringThree = stringOne + stringTwo;
  alert(stringThree);
}

document.querySelector('#backticks').addEventListener("click", showBacksticks);
function showBacksticks() {
  let myName = "Arnold";
  alert(`Hello, my name is ${myName}!`);
}

document.querySelector('#boolean').addEventListener("click", showBoolean);
function showBoolean() {
  let isBigger = 10 > 1;
  let isSmaller = 500 > 1000;
  alert("Is 10 bigger than 1? " + isBigger);
  alert("Is 500 bigger than 1000? " + isSmaller);
}

document.querySelector('#null').addEventListener("click", showNull);
function showNull() {
  let idk = null;
  alert(idk);
}

document.querySelector('#undefined').addEventListener("click", showUndefined);
function showUndefined() {
  let undefined;
  alert(undefined);
}

document.querySelector('#objects').addEventListener("click", showObjects);
function showObjects() {
  
}

document.querySelector('#symbols').addEventListener("click", showSymbols);
function showSymbols() {
  
}

document.querySelector('#typeof').addEventListener("click", showTypeof);
function showTypeof() {
  
}

//Task
document.querySelector('#taskOne').addEventListener("click", task);
function task() {
  let name = "Arnold";
  alert(name);
  alert( `hello ${1}` );
  alert( `hello ${"name"}` );
  alert( `hello ${name}` );
}