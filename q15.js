//Q15

// It will be 50 as num1 is a number in this case, not a boolean

function myFunction(num1) {
    if(true) {
        return -10
    }

    return num1 * 10
}

const result = myFunction(5)

console.log(result)

// So the number is present so it produces a true
// Therfore -10 is returned