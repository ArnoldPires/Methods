# JavaScript Methods
## Arrays and Strings
Here are some useful methods you can use for Arrays and for Strings

### Arrays
##### Map method
The map method allows you to change an array in a different way, depending on what you want to do with it. It does this by returning a new array with your modified function.

**Example One:** 
```
let ages = [3, 6, 9, 11, 13, 44]
function addAge(ages) {
    return ages.map(el => el * 4)
}
addAge(ages)
//Answer = [12, 24, 36, 44, 52, 176]
```
**Example Two:** 
```
let food = ['pizza', 'burgers', 'fried chicken', 'ice cream']
food.map(el => el + ' is' + ' not' + ' good' + ' for' + ' you.')
//Answer = ["pizza is not good for you.", "burgers is not good for you.", "fried chicken is not good for you.", "ice cream is not good for you."]
```
**Example Three:** 
```
let cars = ['BMW', 'Dodge', 'Ford', 'Honda', 'Tesla', 'Toyota']
let length = cars.map((car) => car.length)
console.log(length)
//Answer = [3, 5, 4, 5, 5, 6]
```

##### every Method
Returns a boonlean value depending on your function. It detects if every element in your array passes the condition you set it too. 
**Example One:** 
```
let books = read.every((element, index) => {
    return element.reading.length >= 2
})
console.log(books)
```
**Example Two:** 
```
let birthdays = [30, 50, 40, 20, 10, 70]
function birthdayParties(parties) {
    return parties > 60
}
console.log(birthdays.every(birthdayParties))
//Answer = False
```
**Example Three:** 
```
let captainPlanet = ['fire', 'wind', 'earth', 'water', 'heart']
function noHeart(captain) {
    return captain === 'heart'
}
console.log(captainPlanet.every(noHeart))
//Answer = false
```
##### filter Method
Creates a new array with elements that fall under the criteria from an already exisiting array. This does not change the original array.
**Example One:** 
```
let ages = [15, 24, 56, 17, 19, 44, 36]
let canVote = ages.filter((vote) => vote > 18)
console.log(canVote)
//Answer = [24, 56, 19, 44, 36]
```
**Example Two:** 
```
let ages = [16, 17, 18, 19, 21, 22, 25, 67]
let drinkingAge = ages.filter((drink) => drink > 20)
console.log(drinkingAge)
//Answer = [21, 22, 25, 67]
```
**Example Three:** 
```
let pizzaToppings = ['Pepperoni', 'Onions', 'Bacon', 'Sausage', 'Mushrooms', 'Pineapple', 'Extra cheese'] 
pizzaToppings.filter(element => element.length < 8)
//Answer = ['Onions', 'Bacon', 'Sausage']
```
##### forEach Method
Performs a function for each element in an array. It kinda works as another way of creating a for loop. This doesn't affect the original array. 
**Example One:** 
```
let names = ['Alex', 'Billy', 'Jenny', 'Sarah', 'Julie']
let name = names.forEach (element => console.log(element.concat(' is awesome!')))
//Answer = Alex is awesome! Billy is awesome! Jenny is awesome Sarah is awesome! Julie is awesome!
```
**Example Two:** 
```
const lookAtAllTheseNumbers = [35353, 67567856, 678634534, 689845322, 32423567970, 1232156678646354, 676, 0, 1 , 2, 5]
lookAtAllTheseNumbers.forEach(element => console.log(element))
//Answer = [35353, 67567856, 678634534, 689845322, 32423567970, 1232156678646354, 676, 0, 1 , 2, 5]
```
**Example Three:** 
```
 let theKids = ['Jordan', 'Lelia', 'Ethan', 'Angelisse']
 theKids.forEach((element, index, kids) => {
     kids[index] = element + " Is ready for school"
 })
 console.log(theKids)
```
##### includes Method
Checks a function to see if it "includes" a value that might have been passed into an already exisiting array. 
**Example One:** 
```
const randomWords = ['dollar', 'pills', 'paper', 'phone']
console.log(randomWords.includes('pills')) //True
console.log(randomWords.includes('whatTheFreak')) //false
```
**Example Two:** 
```
let peterPiper = ["Peter Piper picked a peck of pickeled peppers"]
let didPeterPiperPeckedAPickeledPeppers = peterPiper.includes("Peter Piper picked a peck of pickeled peppers")
console.log(didPeterPiperPeckedAPickeledPeppers)
//Answer = True
```
**Example Three:** 
```
const maskMandate = ["I do not have a mask"]
const doYouHaveAMask = maskMandate.includes("I do have a mask")
console.log(doYouHaveAMask)
//Answer = false
```
##### pop Method
Removes the last element of an array.
**Example One:** 
```
let dryEraceMarkers = ["red", "blue", "green", "pink", "black"]
console.log(dryEraceMarkers.pop())
//Answer = "black" is removed
```
**Example Two:** 
```
let randomNumbers = [54645, 275765, 3567560, 43450, 53530]
let removeTheLastNumber = randomNumbers.pop()
console.log(removeTheLastNumber )
//Answer = 53530 is removed from the array
```
**Example Three:**  
```
let money = ['OneDollarBill', 'FiveDollarBill', 'TenDollarBill', 'TwentyDollarBill']
console.log(money.pop())
//Answer = TwentyDollarBill was removed from the array
```
##### push Method
Adds either one or more elements to an existing array.
**Example:** 
```
pokemonNames = ['Bulbasaur', 'Squirtle', 'Chamander']
pokemonNames.push('Ivysaur', 'Wartortle', 'Charmeleon', 'Pikachu')
console.log(pokemonNames)
//Answer = ['Bulbasaur', 'Squirtle', 'Chamander', 'Ivysaur', 'Wartortle', 'Charmeleon', 'Pikachu']
```
##### reduce Method
This method, "reduces" the elements in an array into a single output value.
**Example:** 
```
const pikachu = [565, 454, 8]
const idk = pikachu.reduce(
  (acc, curr) => acc + curr,
  10
);
console.log(idk);
//Answer = 1037
```
##### shift Method
Removes the first element of an array.
**Example:** 
```
let pokemonNamesAgain = ['Ivysaur', 'Pikachu', 'Squirtle'];
let removeIvysaur = pokemonNamesAgain.shift();
console.log(pokemonNamesAgain);
//Answer = ['Pikachu', 'Squirtle']
```
##### slice Method
Returns an element or portion of an element of an array, and places that into a new array.
**Example:** 
```
let nummy = [34232, 232233, 47875, 5985656, 62344, 10265756];
let midNummy = nummy.slice(3, -2);
console.log(midNummy);
//Answer = [5985656]
```
##### sort Method 
"Sorts" the array's elements from smallest to largest and returns that array.
**Example:** 
```
const fruits = ["peach", "mango", "banana", "strawberry", "apple"];
fruits.sort();
console.log(fruits);
```
##### unshift Method
It's the opposite to the shift method. Instead of removing an item, it adds it back.
**Example:** 
```
const nummyNums = [34543, 6786786344, 1233534];
console.log(nummyNums.unshift(2, 7));
//Answer = 5
```
##### indexOf Method
Looks into an array, and returns the index number of where that element was located.
**Example:** 
```
let anotherRandomSentence = "Hello, I am a random sentence";
let wordsSoManyOfThemHere = anotherRandomSentence.indexOf("sentence");
console.log(wordsSoManyOfThemHere);
//Answer 21
```
### Strings
##### charAt Method
The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
**Example:** 
```
let hiThereBuddy = "Hi there buddy"
hiThereBuddy.charAt(6)  
//Answer = r
```
##### charCode Method
The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
**Example:** 
```
const ByeThereBuddy = "Bye there buddy"
ByeThereBuddy.charCodeAt(8)  
//Answer = 101
```
##### slice Method
The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
**Example:** 
```
const goldChain = "I don't wear my gold chain anymore"
const golden = goldChain.slice(16, 21) 
console.log(golden)  
//Answer = gold
```
##### concat Method
The concat() method concatenates the string arguments to the calling string and returns a new string.
**Example:** 
```
let ImLeavingBye = ["I'm ", "leaving", " ", "bye", "!"]
console.log("".concat(...ImLeavingBye))
//Answer = "I'm leaving bye!"
```
##### includes Method
The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
**Example:** 
```
let food = "I don't have enough food, need to buy more"
food.includes("food")
//Answer = true
```
##### repeat Method
The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
**Example:** 
```
let whatAreYouTalkingAbout = 'What are you talking about'
console.log(whatAreYouTalkingAbout + '?'.repeat(25))
//Answer = "What are you talking about?????????????????????????"
```
##### replace Method
The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.
**Example:** 
```
let myEyeColor = "My eye color is not green, blue, or black, it's this"
myEyeColor.replace("this", "brown")

```
##### trim Method
The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
**Example:** 
```
const whiteSpaceRemoveal = "        Can you please get rid of all this random spacing?     "
console.log(whiteSpaceRemoveal.trim())  
//Answer = "Can you please get rid of all this random spacing?"
```
##### match Method
The match() method retrieves the result of matching a string against a regular expression.
**Example:** 
```
let xr = "XR is a combo of VR and AR"
xr.match(/COMBO/gi)
//Answer = "combo"
```
##### split Method
The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.  
**Example:** 
```
var numberNums = "565-75643-3453456-34776"
var newNumberNums = numberNums.split("-").join(".")
console.log(newNumberNums) 
//Answer = "565.75643.3453456.34776"
```
##### indexOf Method
The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
**Example:** 
```
let woodChuck = "How much wood would a woodchuck chuck if a woodchuck could chuck wood???"
woodChuck.indexOf('wood', 10) 
//Answer = 22
```
##### substr Method
The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
**Example:** 
```
let edBoys = "Ed Edd n Eddy"
let theEds = edBoys.substr(-6)
console.log(theEds) 
//Answer = n Eddy
```
##### toLowerCase Method
The toLowerCase() method returns the calling string value converted to lower case.
**Example:** 
```
let stopYelling = "WHY ARE YOU YELLING ME AT ME!?!?!?"
let notYelling = stopYelling.toLowerCase()
console.log(notYelling)
//Answer = "why are you yelling me at me!?!?!?"
```
##### toUpperCase Method
The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
**Example:** 
```
let speakUp = "I can't hear you, can you please speak up?"
let speakingUp = speakUp.toUpperCase()
console.log(speakingUp)
//Answer = "I CAN'T HEAR YOU, CAN YOU PLEASE SPEAK UP?"
```
##### search Method
The search() method executes a search for a match between a regular expression and this String object.
**Example:** 
```
let digimon = "DiGiMoN digital monsters dIgImOn are the champions"
digimon.search(/digimon/gi)
//Anwser = 0
```