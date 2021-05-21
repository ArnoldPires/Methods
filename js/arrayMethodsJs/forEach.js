document.querySelector("#exampleOne").addEventListener("click", giveAnswerOne);
let numberOne = [5, 6]
function giveAnswerOne() {
    numberOne.forEach(function(number){
        document.querySelector("#answerOne").innerHTML = (number * 2)
    })
}

let fruits = ['apple', 'orange', 'pear', 'berries']
fruits.forEach(giveAnswerTwo)
function giveAnswerTwo(item, index) {
    document.querySelector("#answerTwo").innerHTML += index + ':' + item + '<br>'
}

let animals = ["Pig", "Dog", "Cat", "Hamster"];
animals.forEach(giveAnswerThree);
function giveAnswerThree(items, indexs) {
  document.querySelector("#answerThree").innerHTML += indexs + ":" + items + "<br>";
}
