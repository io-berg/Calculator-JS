let num1;
let num2;

function operate(operator, num1, num2) {
    if (operator === '+') return num1 + num2;
    else if (operator === '-') return num1 - num2;
    else if (operator === '*') return num1 * num2;
    else if (operator === '/') return num1 / num2;
}

const oneBtn = document.getElementById('oneBtn');
oneBtn.addEventListener('click', () => document.getElementById('displayNum').textContent += '1');
