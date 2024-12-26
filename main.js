let inputValue1 = + prompt('Enter your first value')
let inputValue2 = + prompt('Enter your second value')
let operator = + prompt('which operation do you want to perform? \n 1. Addition \n 2. Subtraction \n 3. Multiplication \n 4. Division \n 5. Modulus')

let add = inputValue1 + inputValue2
let sub = inputValue1 - inputValue2
let mul = inputValue1 * inputValue2
let div = inputValue1 / inputValue2
let mod = inputValue1 % inputValue2


    if (operator === 1 ){
        alert ('ADDITION: ' + add)
    }
    else if (operator === 2){
        alert ('SUBTRACTION: ' + sub)
    }
    else if (   operator === 3){
        alert ('MULTIPLICATION: ' + mul)
    }
    else if (operator === 4){
        alert ('DIVISION: ' + div)
    }
    else if (operator === 5){
        alert ('MODULUS: ' + mod)
    }
    else {
        alert ('Invalid Input')
    }
