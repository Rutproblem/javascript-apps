const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let firstNumber = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if(value === "C") {
            display.value = "";
            firstNumber = '';
            operator = '';
            return;
        }

        if('+-*/'.includes(value)) {
            firstNumber = display.value
            operator = value;
            display.value = '';
            return;
        }

        if(value === "=") {
            const secondNumber = display.value;
            display.value = calculate(firstNumber, operator, secondNumber);
            return;
        }

        display.value += value;
    });
});

function calculate(a, operator, b) {
    a = Number(a);
    b = Number(b);

    if(operator === '+') return a + b;
    if(operator === '-') return a - b;
    if(operator === '*') return a * b;
    if(operator === '/') {
        if(b === 0) return "Error; cannot divide";
        return a / b;
    };
};