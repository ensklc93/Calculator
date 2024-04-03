function add (n) {
    return n.reduce((a,b) => a + b, 0);
}

function subtract (n) {
    return n.reduce((a,b) => a - b, 0)
}

function multiply (n) {
    return n.reduce((a,b) => a * b, 1)
}

function divide (n) {
    return n.reduce((a,b) => a / b, 1)
}

let firstNumber = []
let secondNumber = [];
let operator;


function operate (firstNumber,secondNumber,operator) {



}

const container = document.querySelector(".container")
const digits = document.querySelectorAll(".digits")
const input = document.querySelector("#calc")
const addOperator = document.querySelector("#addOperator")
const subtractOperator = document.querySelector('#subtract')
const resultScreen = document.querySelector('#result')
const equality = document.querySelector('#equal')

for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener("click", () => {
        input.value += digits[i].value
    });
}

addOperator.addEventListener('click', () => {
    if(firstNumber.length < 1) {
    firstNumber.push(parseInt(input.value))
    } else if (firstNumber.length < 2) {
        secondNumber.push(parseInt(input.value))
        if(secondNumber.length == 1) {
            let operatorArray = firstNumber.concat(secondNumber)
            let resultAdd = add(operatorArray);
            resultScreen.innerHTML = `${firstNumber} + ${secondNumber} = ${resultAdd}`;
            firstNumber.splice(0,1, resultAdd)
            secondNumber = []
        }
    }
    console.log(firstNumber)
    console.log(secondNumber)
    
})







// equality.addEventListener('click', () => {

//     console.log(firstNumber)
//     secondNumber.push(parseInt(input.value))
//     console.log(secondNumber);

// })