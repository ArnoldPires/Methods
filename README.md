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
**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### reduce Method
This method, "reduces" the elements in an array into a single output value.
**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### shift Method
Removes the first element of an array.
**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### slice Method
Returns an element or portion of an element of an array, and places that into a new array.
**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### sort Method
"Sorts" the array's elements from smallest to largest and returns that array.
**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### unshift Method
It's the opposite to the shift method. Instead of removing an item, it adds it back.
**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### indexOf Method
Looks into an array, and returns the index number of where that element was located.
**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```

### Strings
##### charAt Method

**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### charCode Method

**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### concat Method

**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### includes Method

**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### indexOf Method

**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### match Method

**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### repeat Method

**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### replace Method

**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### search Method

**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### slice Method

**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### split Method

**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### substr Method

**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### toLowerCase Method

**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### toUpperCase Method

**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### trim Method

**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```