
let prevNumber = 0;
let currNumber = 0;
let operator = "";

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

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('#clear');

numbers.forEach(num => num.addEventListener('click', event => {
    if (display.textContent == "Division by 0 not allowed") {
        return;
    }
    if (currNumber === 0) {
        displayValue = event.target.textContent;
    } else {
        displayValue += event.target.textContent;
    }
    display.textContent = displayValue;
    currNumber = parseInt(displayValue);
}));

clear.addEventListener('click', () => {
    prevNumber = 0;
    currNumber = 0;
    operator = "";
    displayValue = "0";
    display.textContent = displayValue;
})

const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');

operators.forEach(op => op.addEventListener('click', event => {
    if ((operator == "/" && currNumber == 0) || display.textContent == "Division by 0 not allowed") {
        display.textContent = "Division by 0 not allowed";
        return;
    }
    if (operator != "") {
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
}));

equals.addEventListener('click', event => {
    if ((operator == "/" && currNumber == 0) || display.textContent == "Division by 0 not allowed") {
        display.textContent = "Division by 0 not allowed";
        return;
    }
    if (operator != "") {
        const result = operate(operator, prevNumber, currNumber);
        displayValue = result;
        prevNumber = result;
    }  else /* if (currNumber != 0) */ {
        displayValue = currNumber;
        prevNumber = currNumber;
    } 
    display.textContent = displayValue;
});
