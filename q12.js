//Q12

//Result will be 10 as myFunction calls getSomeValue

function getSomeValue() {
    return 2
}

function myFunction(num1) {
    const num2 = getSomeValue()
    return num1 * num2
}

const result = myFunction(5)

console.log(result)

//We got it!
