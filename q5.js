//Q5

//The function console logs num1 (second argument)
//This won't return anything as num1 (second argument) is not 
//used when calling the function

function myFunction(num, num1) {
    console.log(num1)
}

let num = 10
let num1 = 2

myFunction(num)

console.log(num, num1)

//It returns undefined (not nothing). Makes sense as the function
//always gives out something, even if it is undefined.