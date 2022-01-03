let displayNum = "";
let savedNum;
let operator;
let resetDisplay = true;

function operate(operator, num1, num2) {
    if (operator === '+') {
        return (num1 + num2);
    }
    else if (operator === '-') {
        return (num1 - num2);
    }
    else if (operator === '*') {
        return (num1 * num2);
     }
    else if (operator === '/') {
        return (num1 / num2);
    }
}

const oneBtn = document.getElementById('oneBtn');
oneBtn.addEventListener('click', () => updateDisplay(1));

const twoBtn = document.getElementById('twoBtn');
twoBtn.addEventListener('click', () => updateDisplay(2));

const threeBtn = document.getElementById('threeBtn');
threeBtn.addEventListener('click', () => updateDisplay(3));

const fourBtn = document.getElementById('fourBtn');
fourBtn.addEventListener('click', () => updateDisplay(4));

const fiveBtn = document.getElementById('fiveBtn');
fiveBtn.addEventListener('click', () => updateDisplay(5));

const sixBtn = document.getElementById('sixBtn');
sixBtn.addEventListener('click', () => updateDisplay(6));

const sevenBtn = document.getElementById('sevenBtn');
sevenBtn.addEventListener('click', () => updateDisplay(7));

const eightBtn = document.getElementById('eightBtn');
eightBtn.addEventListener('click', () => updateDisplay(8));

const nineBtn = document.getElementById('nineBtn');
nineBtn.addEventListener('click', () => updateDisplay(9));

const zeroBtn = document.getElementById('zeroBtn');
zeroBtn.addEventListener('click', () => updateDisplay(0));

const acBtn = document.getElementById('acBtn');
acBtn.addEventListener('click', () => resetCalc());

const flipBtn = document.getElementById('flipBtn');
flipBtn.addEventListener('click', () => flipNum());

const percentBtn = document.getElementById('percentBtn');
percentBtn.addEventListener('click', () => {
    resetDisplay = true;
    displayNum = Number(displayNum);
    displayNum = operate('/', displayNum, 100);
    updateDisplay(displayNum);
});

const plusBtn = document.getElementById('plusBtn');
plusBtn.addEventListener('click', () => {
    if (savedNum === null) {
        savedNum = displayNum;
        operator = '+';
        resetDisplay = true;        
    }
    else {
        equals();
        operator = '+';
        resetDisplay = true;
        savedNum = displayNum;
    }

    updateTestNums(displayNum, savedNum); //TODO: REMOVE ME
});

const equalsBtn = document.getElementById('equalsBtn');
equalsBtn.addEventListener('click', () => equals())

function equals() {
    displayNum = operate(operator, savedNum, displayNum);
    resetDisplay = true;
    updateDisplay(displayNum);
};

const divideBtn = document.getElementById('divideBtn');
divideBtn.addEventListener('click', () => {
    if (savedNum === null) {
        savedNum = displayNum;
        operator = '/';
        resetDisplay = true;        
    }
    else {
        equals();
        operator = '/';
        resetDisplay = true;
        savedNum = displayNum;
    }

    updateTestNums(displayNum, savedNum); //TODO: REMOVE ME
});

const multiplyBtn = document.getElementById('multiplyBtn');
multiplyBtn.addEventListener('click', () => {
    if (savedNum === null) {
        savedNum = displayNum;
        operator = '*';
        resetDisplay = true;
    }
    else {
        equals();
        operator = '*';
        resetDisplay = true;
        savedNum = displayNum;
    }

    updateTestNums(displayNum, savedNum); //TODO: REMOVE ME
});

const minusBtn = document.getElementById('minusBtn');
minusBtn.addEventListener('click', () => {
    if (savedNum === null) {
        savedNum = displayNum;
        operator = '-';
        resetDisplay = true;
    }
    else {
        equals();
        operator = '-';
        resetDisplay = true;
        savedNum = displayNum;
    }

    updateTestNums(displayNum, savedNum); //TODO: REMOVE ME
});

const dotBtn = document.getElementById('dotBtn');
dotBtn.addEventListener('click', () => {
    displayNum += '.';
    resetDisplay = true;
    updateDisplay(displayNum);
})

const display = document.getElementById('displayNum');

function updateDisplay(num) {
    if (resetDisplay === true) {
        displayNum = num;
        resetDisplay = false;
    }
    else {
        displayNum += "" + num;
        displayNum = Number(displayNum);
    }
    
    display.textContent = displayNum;

    updateTestNums(displayNum, savedNum);  // TODO: REMOVE
}

function resetCalc() {
    document.getElementById('displayNum').textContent = '0.0';

    displayNum = null;
    savedNum = null;
    resetDisplay = true;

    updateTestNums(displayNum, savedNum); // TODO: REMOVE
}

function flipNum() {
    displayNum = displayNum - (displayNum * 2);
    resetDisplay = true;
    updateDisplay(displayNum); // TODO: REMOVE
}

function updateTestNums() {
    document.getElementById('savedNum').textContent = savedNum;
    document.getElementById('operator').textContent = operator;
}

resetCalc();