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
    if(firstNumber == 0 || secondNumber == 0) {
        resultScreen.innerHTML = "That is a dangerous path you're walking fella!"
        firstNumber + secondNumber;
    } else{
    return  firstNumber / secondNumber;
    }
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
const dot = document.querySelector('#dot')


// After selecting the buttons adding the button value to input value
for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener("click", () => {
        if(input.value.length < 10) {
            input.value += digits[i].value
        } else {
            return
        }
    });
}
// Allowing the dot button once in every calculation 
dot.addEventListener("click", () => {
    if(input.value.length > 0 && input.value.indexOf('.') > -1 ) {
        return
    } else {
        input.value += dot.value
    }
})


input.addEventListener("blur", function(event){
    input.focus();
}); 


function clickOperation (operatorPlaceholder) {
    if (operationArray.length < 1) {
        operator = operatorPlaceholder;
        operationArray[0] = parseFloat(input.value)
        if (isNaN(operationArray[0]) == true){
            return operationArray.splice(0)
        } else {
            resultScreen.innerHTML = `${operationArray[0]} ${operatorValue}`
            input.value = "";
            input.select();
        }
    } else if (operationArray.length < 2) {
        operationArray[1] = parseFloat(input.value)
            if(isNaN(operationArray[1]) == true) {
                operationArray.splice(1,1)
                resultScreen.innerHTML = `${operationArray[0]} ${operatorValue}`
                return operator = operatorPlaceholder;
           } else {
            console.log(operationArray)
            let sum = operationArray.reduce(operator)
            if(isNaN(sum) == true || sum == undefined) {
                operator = operatorPlaceholder;
                operationArray.splice(0)
                input.value = "";
                input.select();
            } else {
                resultScreen.innerHTML = `${sum} ${operatorValue}`
                operator = operatorPlaceholder;
                operationArray.splice(0,2, sum)
                console.log(operationArray)
                input.value = "";
                input.select();
            }
        }
    }

}

addOperator.addEventListener('click', () => {
    operatorValue = addOperator.value
    clickOperation(add)
})

subtractOperator.addEventListener('click', () => {
    operatorValue = subtractOperator.value
    clickOperation(subtract)
})

multiplyOperator.addEventListener('click', () => {
    operatorValue = multiplyOperator.value
    clickOperation(multiply)
})

divideOperator.addEventListener('click', () => {
    operatorValue = divideOperator.value
    clickOperation(divide)
    
})

clear.addEventListener('click', () => {
    operationArray.splice(0)
    resultScreen.innerHTML =""
    input.value = "";
})

function operate () {
    if(operationArray.length < 1 || isNaN(operationArray[0]) == true) {
        input.value = "";
        input.select();
        operationArray.splice(0)
        resultScreen.innerHTML = ""
    } else {
        operationArray[1] = parseFloat(input.value)
        console.log(operationArray)
        if(isNaN(operationArray[1]) == true) {
            return operationArray.splice(1,1)
        } else {
        let result = operator(operationArray[0], operationArray[1])
        resultScreen.innerHTML = `${operationArray[0]} ${operatorValue} ${operationArray[1]} = ${result}` 
        let sum = operationArray.reduce(operator)
        operationArray.splice(0,2, sum)
        input.value = "";
        input.select();
        }
    }
}

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        equality.click();
    } else if (event.keyCode === 187 && event.shiftKey == true) {
        multiplyOperator.click();
    } else if (event.keyCode === 187) {
        addOperator.click();
    }
    else if (event.keyCode === 189) {
        subtractOperator.click();
    }
    else if (event.keyCode === 55) {
        divideOperator.click();
    }
});






equality.addEventListener('click', () => operate())

backspace.addEventListener('click', () => {input.value = input.value.substring(0, input.value.length-1)})


input.oninput = checkKey;
function checkKey() {
    let clean = this.value.replace(/[^.\d]/g, '')
                          .replace(/^(\d*\.?)|(\d*)\.?/g, "$1$2");
    // don't move cursor to end if no change
    if (clean !== this.value) this.value = clean;
    
}