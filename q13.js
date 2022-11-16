//Q13

// Should be 10 as the return calls the getSomeValue

function getSomeValue(){
    return 2
}

function myFunction(num1) {
    const num2 = getSomeValue()
    return num1 * getSomeValue()
}

const result = myFunction(5)

console.log(result)

//worked as expected (after creating a typo)