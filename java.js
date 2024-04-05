// Operation functions
function add (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
function subtract (firstNumber, secondNumber) {
    return  firstNumber - secondNumber;
}
function multiply (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
function divide (firstNumber, secondNumber) {
    return  firstNumber / secondNumber;
}


let operationArray = [];
let operator;
let operatorValue;

const container = document.querySelector(".container")
const digits = document.querySelectorAll(".digits")
const input = document.querySelector("#calc")
const addOperator = document.querySelector("#add")
const subtractOperator = document.querySelector('#subtract')
const multiplyOperator = document.querySelector('#multiply')
const divideOperator = document.querySelector('#divide')
const resultScreen = document.querySelector('#result')
const equality = document.querySelector('#equal')
const clear = document.querySelector('#clear')
const backspace = document.querySelector('#backspace')


// After selecting the buttons adding the button value to input value
for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener("click", () => {
        input.value += digits[i].value
    });
}



addOperator.addEventListener('click', () => {
    operatorValue = addOperator.value
     if (operationArray.length < 1) {
        operator = add;
        operationArray[0] = parseInt(input.value)
        resultScreen.innerHTML = `${operationArray[0]} +`
        input.value = "";
        input.select();
    } else if (operationArray.length < 2) {
        if(input.value == false) {
            resultScreen.innerHTML = `${operationArray[0]} ${operatorValue}`
            return operationArray[1] = "";
        } else {
            operationArray[1] = parseInt(input.value)
            console.log(operationArray)
            let sum = operationArray.reduce(operator)
            operator = add;
            resultScreen.innerHTML = `${sum} +`
            operationArray.splice(0,2, sum)
            console.log(operationArray)
            input.value = "";
            input.select();
        }
    }
})

subtractOperator.addEventListener('click', () => {
    operatorValue = subtractOperator.value
    if (operationArray.length < 1){
        operator = subtract;
        operationArray[0] = parseInt(input.value)
        resultScreen.innerHTML = `${operationArray[0]} -`
        input.value = "";
        input.select();
    } else if (operationArray.length < 2) {
        if(input.value == false) {
            resultScreen.innerHTML = `${operationArray[0]} ${operatorValue}`
            operationArray[1] = "";
        } else {
            operationArray[1] = parseInt(input.value)
            console.log(operationArray)
            let sum = operationArray.reduce(operator)
            operator = subtract;
            resultScreen.innerHTML = `${sum} -`
            console.log(operationArray)
            operationArray.splice(0,2, sum)
            input.value = "";
            input.select();
        }
    }
})

multiplyOperator.addEventListener('click', () => {
    operatorValue = multiplyOperator.value
     if(operationArray.length < 1){
        operator = multiply;
        operationArray[0] = parseInt(input.value)
        resultScreen.innerHTML = `${operationArray[0]} *`
        input.value = "";
        input.select();
    } else if (operationArray.length < 2) {
        if(input.value == false) {
            resultScreen.innerHTML = `${operationArray[0]} ${operatorValue}`
            return operationArray[1] = "";
        } else {
            operationArray[1] = parseInt(input.value)
            console.log(operationArray)
            let sum = operationArray.reduce(operator)
            operator = multiply;
            resultScreen.innerHTML = `${sum} *`
            operationArray.splice(0,2, sum)
            console.log(operationArray)
            input.value = "";
            input.select();
        }
    }
})

divideOperator.addEventListener('click', () => {
    operatorValue = divideOperator.value
     if(operationArray.length < 1){
        operator = divide;
        operationArray[0] = parseInt(input.value)
        resultScreen.innerHTML = `${operationArray[0]} /`
        input.value = "";
        input.select();
    } else if (operationArray.length < 2) {
        if(input.value == false) {
            resultScreen.innerHTML = `${operationArray[0]} ${operatorValue}`
            operationArray[1] = "";
        } else {
            operationArray[1] = parseInt(input.value)
            console.log(operationArray)
            let sum = operationArray.reduce(operator)
            operator = divide;
            resultScreen.innerHTML = `${sum} /`
            operationArray.splice(0,2, sum)
            console.log(operationArray)
            input.value = "";
            input.select();
        }
    }
})

clear.addEventListener('click', () => operationArray.splice(0))

function operate () {
    if(operationArray.length < 1 || operationArray == isNaN) {
        input.value = "";
        input.select();
    } else {
        operationArray[1] = parseInt(input.value)
        let result = operator(operationArray[0], operationArray[1])
        resultScreen.innerHTML = `${operationArray[0]} ${operatorValue} ${operationArray[1]} = ${result}` 
        let sum = operationArray.reduce(operator)
        operationArray.splice(0,2, sum)
        input.value = "";
        input.select();
    }

console.log(operationArray)
}

equality.addEventListener('click', () => operate())

