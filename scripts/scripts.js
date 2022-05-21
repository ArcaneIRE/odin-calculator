// Operator functions
function add (a, b) { return a + b; }
function subtract (a, b) { return a - b; }
function multiply (a, b) { return a * b; }
function divide (a, b) {return a / b; }

function operate(operation) {
    if (displayString === '' && auxiliaryString === '') { return }
    if (!(displayString === '' || auxiliaryString === '')) {
        evaluate();
    }
    if (!(auxiliaryString === '') && displayString === '') {
        operator = operation;
        updateDisplay();
        return;
    }
    if (auxiliaryString === '') {
        auxiliaryString = displayString;
        operator = operation;
        displayString = '';
        updateDisplay();
        return;
    }
}

function evaluate () {
    if (displayString === '' || auxiliaryString === '') { return }
    const auxNum = parseFloat(auxiliaryString)
    const displayNum = parseFloat(displayString);
    let result;
    switch (operator) {
        case '+':
            result = add(auxNum, displayNum);
            break;
        case '-':
            result = subtract(auxNum, displayNum);
            break;
        case '*':
            result = multiply(auxNum, displayNum);
            break;
        case '/':
            if (displayNum === 0) {
                result = 'Nice try 😏'
                break;
            }
            result = divide(auxNum, displayNum);
            break;
    }
    clear();
    if (result.toString.length > 15) {
        let string = result.toString;
        if (string.includes('.')){
            result = Math.toFixed(string.length - 15);
        }
    }
    displayString = result;
    updateDisplay();
    return;
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
    operator = '';
    updateDisplay();
}

//Initialization
const mainContent = document.getElementById('main-content');
const auxContent = document.getElementById('aux-content');
const auxOperator = document.getElementById('aux-operator');
let displayString = '';
let auxiliaryString = '';
let operator = '';

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
    document.getElementById('evaluate').addEventListener('click', () => {
        evaluate();
    });
    document.getElementById('add').addEventListener('click', () => {
       operate('+'); 
    });
    document.getElementById('subtract').addEventListener('click', () => {
        operate('-'); 
     });
     document.getElementById('multiply').addEventListener('click', () => {
        operate('*'); 
     });
     document.getElementById('divide').addEventListener('click', () => {
        operate('/'); 
     });
}
