# Q1

```javascript
function myFunction(num1, num2) {
  return num1+num2
}

const result = myFunction(5,5)
```

Adding num1 and num 2
const result myFunction = 10

Result - I was correct, the code did what I expected.

# Q2

```javascript
function myFunction(num1, num2) {
  num1+num2
}

const result = myFunction(5,5)
```

Adding num1 and num 2 and does not return result.
const result myFunction = undefined

Result - I was correct, the code did what I expected.

# Q3

```javascript
function myFunction(num) {
  return num-1
}

let num = 10
num = myFunction(num)
num = myFunction(num)
```

enters value of 10 into function at beginning and subtracts 1 and makes value 9
last line of code repeats this and makes value 8

Result - I was correct, the code did what I expected.

# Q4

```javascript
function myFunction(num) {
  return num-1
}

let num = 10
let add = 3
add = myFunction(add)
add = myFunction(add)
```

enters a value of 3 into function at beginning. This process goes through twice giving an anser of 1. 10 does not enter the process and remains the same.

Result - I was correct, the code did what I expected.

# Q5

```javascript
function myFunction(num, num1) {
  console.log(num1)
}

let num = 10
let num1 = 2

myFunction(num)
```

myFunction is called with one number, but 2 numbers are expected. Because myFunction would log the second number into the console, but we never gave it a second number. Hence, it returned undefined.

Result - I was correct, the code did what I expected.