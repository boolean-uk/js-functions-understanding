//Q23

// Result will be 0 as return within the function is not present

function myFunction(num1, num2) {
    result = num1+num2
  }
  
  let result = 0
  myFunction(100, 2)
  console.log(result)

// Without the let declaration in the function, the function
// modifies the result variable