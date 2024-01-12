let nr1
let nr2
let operand

function getFirstNr() {
    const nr1Prompt = Number(window.prompt("Enter the first number.", "0"))
    nr1 = nr1Prompt
}

function getSecondNr() {
    const nr2Prompt = Number(window.prompt("Enter the second number.", "0"))
    nr2 = nr2Prompt
}

function checkOperand(operandPrompt) {
    if(operandPrompt === "+" || "-" || "*" || "/") {
        return true
    } else {
        return false
    }
}

function getOperand() {
    const operandPrompt = window.prompt("Enter the operand.")
    checkOperand(operandPrompt) ? operand = operandPrompt : window.alert("Try again and enter one of these operands: + - * /")
}