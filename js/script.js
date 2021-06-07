const numbers = document.querySelectorAll('[data-number]');
const operation = document.querySelectorAll('[data-operation]');
const btnEqual = document.querySelector('[data-equal]');
const btnReset = document.querySelector('[data-reset]');
let current = document.querySelector(".current");
let recent = document.querySelector(".recent");

let firstNumber = lastNumber = operator = '';


numbers.forEach(num => {
    num.addEventListener("click", () => {
        if(operator == '') {
            firstNumber += num.innerText;
            current.innerText = firstNumber
        } else   {
            lastNumber += num.innerText;
            current.innerText = `  ${lastNumber}`;
        }
    })
})
operation.forEach(opp => {
    opp.addEventListener("click", () => {
        if(operator == '') {
            operator = opp.getAttribute("data-operation")
            recent.innerText = `${current.innerText}  ${opp.innerText}`;
        }
    })
})

btnReset.addEventListener("click", () => {
    current.innerText = "0";
    recent.innerText = "0";
    reset();
})
btnEqual.addEventListener("click", () => {
    current.innerText = recent.innerText = calc(firstNumber,operator,lastNumber);
    reset();
})

const calc = (firstNumber,operator,lastNumber) => {
    if(firstNumber == '') {
        firstNumber = '0';
    }
    let firstNum = parseInt(firstNumber);
    let lastNum = parseInt(lastNumber);

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

