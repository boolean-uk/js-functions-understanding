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

# Q6

```javascript
function myFunction(num, num1) {
  console.log(num1)
}

let num = 10
let num1 = 2

myFunction(num1, num)
```

We log num1 to the console, which is the second number in the function. The function is called with num as the second number, which is 10. As a result, 10 will be printed to the console.

Result - I was correct, the code did what I expected.

# Q7

What will the value of counter be at the end of this program? Why?

```javascript
let counter = 1

function myFunction() {
  counter++
  return counter
}

myFunction()
const num = myFunction()
```

myFunction increases the counter by one. We run the function twice, so counter should be 3 at the end.

Result - I was correct, the code did what I expected.

# Q8

What will the value of `result` be at the end of this program? Why?

```javascript
function myFunction(num1, num2) {
  return num1 + num2
}

const num1 = 10
const num2 = 1
const num3 = 4

const result = myFunction(num3, num1)
```

MyFunction adds two numbers together. We call it with the values of 4 and 10, making the result 14.

Result - I was correct, the code did what I expected.

# 09

What will be logged out on the console when this code runs? Why?

```javascript
function myFunction(num1, num2) {
  console.log(num3)
}

const num1 = 10
const num2 = 1
const num3 = 20

myFunction(num3, num1)
```

The function is looking to log num3 to the console but it's not set as a parameter. It will look for the variable from the outside and find it as 20. As a result, 20 will be logged to the console.

Result - I was correct, the code did what I expected.

# 10

What will be logged out on the console when this code runs? Why?

```javascript
function myFunction(num1, num2, num3) {
  console.log(num3)
}

const num1 = 10
const num2 = 1
const num3 = 20

myFunction(num3, num1, 100)
```

The function is looking to log the third argument given to it to the console. The third argument is 100, so 100 will be logged to the console.

Result - I was correct, the code did what I expected.

# 11

What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1, num2, num3) {
  return num1 + num2 + num3
}

const num1 = 10
const num2 = 1
const num3 = 20

const result = myFunction(1, 1, 1)
```

The function is adding 3 numbers together. We pass 1, 1, and 1 to it as arguments, so it will return 3. The outside variables declared by const don't matter.

Result - I was correct, the code did what I expected.

# 12

What will be the value of `result` when this code runs? Why?

```javascript
function getSomeValue() {
  return 2
}

function myFunction(num1) {
  const num2 = getSomeValue()
  return num1 * num2
}

const result = myFunction(5)
```

MyFunction multiplies the number passed to it as an argument by 2 (through getSomeValue). Since we pass 5 to it, the result will be 10.

Result - I was correct, the code did what I expected.

# 13

What will be the value of `result` when this code runs? Why?

```javascript
function getSomeValue() {
  return 2
}

function myFunction(num1) {
  const num2 = getSomeValue()
  return num1 * getSomeValue()
}

const result = myFunction(5)
```

MyFunction multiplies the number passed to it as an argument by 2 (through getSomeValue). The num2 variable declared inside the function doesn't do anything. Since we pass 5 to it, the result will be 10. 

Result - I was correct, the code did what I expected.

# 14

What will be the value of `result` when this code runs? Why?

```javascript
function getSomeValue() {
  return 2
}

function myFunction(num1) {
  return getSomeValue() * getSomeValue()
}

const result = myFunction(5)
```

MyFunction returns 4 under all circumstances, no matter what arguments we pass to it.

Result - I was correct, the code did what I expected.

# 15

What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1) {
  if(true) {
    return -10
  }

  return num1 * 10
}

const result = myFunction(5)
```

According to the internet, Javascript doesn't support functions that return multiple values. This should result in an error.

Update: I was wrong. Apparently it just returns the first value and stops executing things below it. Since the if statement is true, it will return -10.

Result - I was correct, the code did what I expected.

# 16

What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1) {
  if(false) {
    return -100
  }

  return num1 * 10
}

const result = myFunction(5)
```

The code in if statement doesn't run, so it will multiply the passed number by 10, resulting in 50.

Result - I was correct, the code did what I expected.

# 17

What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1) {
  return -100

  return num1 * 10
}

const result = myFunction(5)
```

The first return runs, so the result is going to be -100.

Result - I was correct, the code did what I expected.

# 18

What will be the value of `result` when this code runs? Why?

```javascript
function myFunction(num1) {

  return num1 * 10

  return -100
}

const result = myFunction(5)
```

The first return runs, so the result is going to be 5 multiplied by 10 = 50.

Result - I was correct, the code did what I expected.