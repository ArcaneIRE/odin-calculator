// Operator functions
function add (a, b) { return a + b; }
function subtract (a, b) { return a - b; }
function multiply (a, b) { return a * b; }
function divide (a, b) {return a / b; }

function operate(operator, a, b) {
    switch (operator) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
    }
}

// Display functions
function updateDisplay() {
    mainContent.textContent = displayString
    auxContent.textContent = auxiliaryString;
    auxOperator.textContent = operator;
    return;
}

function addCharacterToDisplay(character) {
    if (displayString.length > 15) { return };
    if (character === '.' && displayString.includes('.')) { return };
    
    if (displayString.length === 0) {
        if (character === '.') {
            displayString = '0.'
        } else {
            displayString = character;
        }
    } else {
        displayString += character;
    }
    updateDisplay();
    return;
}

function removeCharacterFromDisplay() {
    if (displayString.length === 0) { return };
    displayString = displayString.slice(0, -1);
    updateDisplay();
    return;
}

function clear() {
    displayString = '';
    auxiliaryString = '';
    operator = null;
    updateDisplay();
}

//Initialization
const mainContent = document.getElementById('main-content');
const auxContent = document.getElementById('aux-content');
const auxOperator = document.getElementById('aux-operator');
let displayString = '';
let auxiliaryString = '';
let operator = null;

window.onload = () => {
    // Event Listeners
    [...document.querySelectorAll('.number')].forEach(numberButton => {
        numberButton.addEventListener('click', () => {
            addCharacterToDisplay(numberButton.id.slice(-1));
        });
    });
    document.getElementById('decimal').addEventListener('click', () => {
        addCharacterToDisplay('.');
    });
    document.getElementById('backspace').addEventListener('click', () => {
        removeCharacterFromDisplay();
    });
    document.getElementById('clear').addEventListener('click', () => {
        clear();
    });
}