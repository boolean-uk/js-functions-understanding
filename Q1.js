//I wan a function that takes 2 numbers and adds them.
//INPUT: two numbers, num1 and num2
//OUTPUT: a new number which is  the result of the calculation
//in this case, examples are num1 = 5: num2 = 5: result = 10

function myFunction(num1, num2) {
    return num1+num2
    
  }
  const result = myFunction(5,5)
  console.log(result)
  

 // I want a function that takes 2 numbers, adds them, then multiplies the result by the same 2 numbers

// INPUT: two numbers, num1 and num2 (I choose the variable name)
// OUTPUT: a new number that is the result of a calculation
// EXAMPLES: num1 = 2; num2 = 3; result = 30
function doCalculation(num1, num2) {
    result = 0;
    // each step should be 1 single action: a push(), a get of a value, a for looop initialisation, an if statement
    // done: step 1: adds the two numbers
    result = num1 + num2;
    console.log("Adding:", result);
    //done: step 2: multiply the current result by num1 and num2
    result = result * num1 * num2;
    console.log("Multiplying:", result);
    //done: step 3: return the result
    return result;
  }
  
  result = doCalculation(2, 3);
  console.log(result);