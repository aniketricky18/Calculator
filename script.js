let display = document.getElementById('display');
let numberInput = document.getElementById('numberInput');
let percentageInput = document.getElementById('percentageInput');
let resultDisplay = document.getElementById('result');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function addPercentage() {
    calculatePercentage('add');
}

function subtractPercentage() {
    calculatePercentage('subtract');
}

function calculatePercentage(operation) {
    let number = parseFloat(numberInput.value);
    let percentage = parseFloat(percentageInput.value);

    if (!isNaN(number) && !isNaN(percentage)) {
        let percentageValue = percentage / 100;
        let result;
        if (operation === 'add') {
            result = number + (number * percentageValue);
        } else if (operation === 'subtract') {
            result = number - (number * percentageValue);
        }
        resultDisplay.value = result.toFixed(2);
    } else {
        resultDisplay.value = 'Invalid Input';
    }
}
