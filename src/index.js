function checkOperands(prompt) {
    if (typeof prompt != "number") {
        return;
    }
    return prompt
}

function checkOperator(operatorPrompt) {
    if (operatorPrompt.length === 1 && ["+", "-", "*", "/"].includes(operatorPrompt)) {
        return true
    } else {
        return false
    }
}

function runCalculator() {
    let nr1
    let nr2
    let operator
    let outcome
    let result

    const nr1Prompt = window.prompt("Enter the first number.", "0")
    if(!checkOperands(parseFloat(nr1Prompt))) {
        window.alert("The operands must be numbers, try again")
        return;
    }
    nr1 = nr1Prompt

    const nr2Prompt = window.prompt("Enter the second number.", "0")
    if(!checkOperands(parseFloat(nr2Prompt))) {
        window.alert("The operands must be numbers, try again")
        return;
    }
    nr2 = nr2Prompt    

    const operatorPrompt = window.prompt("Enter the operator.")
    if (!checkOperator(operatorPrompt)) {
        window.alert("Try again and enter only one of these operators: + - * /");
        return;
    }
    operator = operatorPrompt;

    if (operator === "+") {
        outcome = "sum"
        result = nr1 + nr2
    } else if (operator === "-") {
        outcome = "difference"
        result = nr1 - nr2
    } else if (operator === "*") {
        outcome = "product"
        result = nr1 * nr2
    } else if (operator === "/") {
        outcome = "quotient"
        result = nr1 / nr2
    }

    window.alert(`The ${outcome} of ${nr1} ${operator} ${nr2} is ${result}`)
}

