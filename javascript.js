
let prevNumber = 0;
let currNumber = 0;
let operator = "";
//let lastOperation = "";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let prevValue = "";
let displayValue = "0";

function operate(op, num1, num2) {
    switch (op) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

const display = document.querySelector('#currValue');
const prevOp = document.querySelector('#prevOp');
const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('#clear');

numbers.forEach(num => num.addEventListener('click', event => {
    if (currNumber === 0) {
        displayValue = event.target.textContent;
    } else {
        displayValue += event.target.textContent;
    }
    console.log(displayValue);
    display.textContent = displayValue;
    currNumber = parseInt(displayValue);
}));

clear.addEventListener('click', () => {
    prevNumber = 0;
    currNumber = 0;
    displayValue = "0";
    //lastOperation = "";
    display.textContent = displayValue;
    //prevOp.textContent = lastOperation;
})

const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');

operators.forEach(op => op.addEventListener('click', event => {
    if (operator != "" || operator != "=") {
        const result = operate(operator, prevNumber, currNumber);
        displayValue = result;
        prevNumber = result;
    } else {
        displayValue = currNumber;
        prevNumber = currNumber;
    }
    currNumber = 0;
    display.textContent = displayValue;
    operator = event.target.textContent;
    /*
    console.log(prevNumber);
    prevOp.textContent = prevNumber.toString() + " " + operator;
    */
}));

equals.addEventListener('click', event => {
    if (operator != "" || operator != "=") {
        const result = operate(operator, prevNumber, currNumber);
        displayValue = result;
        prevNumber = result;
        currNumber = 0;
    }  else /* if (currNumber != 0) */ {
        displayValue = currNumber;
        prevNumber = currNumber;
    } 
    display.textContent = displayValue;
    operator = "=";
})

/*
const sum = document.querySelector('#plus');

sum.addEventListener('click', event => {
    const result = operate(event.target.textContent, prevNumber, currNumber);
    prevNumber = result;
    currNumber = 0;
    displayValue = result;
    display.textContent = displayValue;
    operator = event.target.textContent;
})
*/