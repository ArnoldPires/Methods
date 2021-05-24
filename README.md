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
Returns a boonlean value to let you know if your function passes a test depending on your provided function. 
**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### filter Method
Creates a new array with elements that fall under the criteria from an already exisiting array. This does not change the original array.
**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

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

```
**Example Three:** 
```

```
##### includes Method
Checks a function to see if it "includes" a value that might have been passed into an already exisiting array. 
**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### pop Method
Removes the last element of an array.
**Example One:** 
```

```
**Example Two:** 
```

```
**Example Three:** 
```

```
##### push Method
Adds either one or more element to an existing array.
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