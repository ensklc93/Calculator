function add (n) {
    return n.reduce((a,b) => a + b, 0)
}

function substract (n) {
    return n.reduce((a,b) => a - b, 0)
}

function multiply (n) {
    return n.reduce((a,b) => a * b, 1)
}

function divide (n) {
    return n.reduce((a,b) => a / b, 1)
}

let firstNumber;
let secondNumber;
let operator;


function operate (firstNumber,secondNumber,operator) {
    let x = []
    x.push(firstNumber)
    x.push(secondNumber)
    return operator(x)
}



