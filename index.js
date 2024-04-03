let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLastCharacter() {
   display.value = display.value.slice(0, -1);
}

function calculatePercentage(){
    var currentValue = parseFloat(display.value);
    display.value = (currentValue / 100).toString();
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
