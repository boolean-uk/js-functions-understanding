//Q22

//102 as let allows result to be modified

function myFunction(num1, num2) {
    let result = num1+num2
    return result
  }
  
  let result = 0
  myFunction(100, 2)
console.log(result)

// returned 0 as the function does not modify the variable outside the function

