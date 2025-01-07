//Method 1 : using loop

const findFactorial = (number) => {
    let factorial = 1

    for (let i = 1; i< number; i++){
        factorial *= i
    }

    return factorial
}

console.log(findFactorial(6))
