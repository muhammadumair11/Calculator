const numbers = document.querySelectorAll('[data-number]');
const operation = document.querySelectorAll('[data-operation]');
const btnEqual = document.querySelector('[data-equal]');
const btnReset = document.querySelector('[data-reset]');
let displayArea = document.querySelector(".calc-area");

let firstNumber = lastNumber = operator = '';


numbers.forEach(num => {
    num.addEventListener("click", () => {
        if(operator == '') {
            firstNumber += num.innerText;
            displayArea.innerText = firstNumber
        } else   {
            lastNumber += num.innerText;
            displayArea.innerText = lastNumber
        }
    })
})
operation.forEach(opp => {
    opp.addEventListener("click", () => {
        if(operator == '') {
            operator = opp.getAttribute("data-operation")
        }
    })
})

btnReset.addEventListener("click", () => {
    displayArea.innerText = "0";
    reset();
})
btnEqual.addEventListener("click", () => {
    displayArea.innerText = calc(firstNumber,operator,lastNumber);
    reset();
})

const calc = (firstNumber,operator,lastNumber) => {
    firstNum = parseInt(firstNumber);
    lastNum = parseInt(lastNumber);

    switch (operator) {
        case "sum":
            return firstNum + lastNum;
        case "sub":
            return firstNum - lastNum;
        case "mul":
            return firstNum * lastNum;
        case "divide":
            return firstNum / lastNum;
        default:
            return 0;
    }
}

function reset () {
    firstNumber = lastNumber = operator = "";
}

