// Array to store calculations
let history = []

//Functions for operations
function add(a, b) {
    let result = a + b;
    saveToHistory(a, b, "+", result);
    return result;
}

function subtract(a, b) {
    let result = a - b;
    saveToHistory(a, b, "-", result);
    return result;
}

function multiply(a, b) {
    let result = a * b;
    saveToHistory(a, b, "*", result);
    return result;
}

function divide(a, b) {
    let result = a / b;
    saveToHistory(a, b, "/", result);
    return result;
}

//save each calculation into history array
function saveToHistory(a, b, operator, result){
    history.push({
        operand1: a,
        operand2: b,
        operator: operator,
        result: result
    })
}

// Show calculation in history
function showHistory() {
    console.log("--- Calculation History ---");
    history.forEach((item, index) => { 
        console.log (`${index + 1}. ${item.operand1} ${item.operator} ${item.operand2} = ${item.result}`
        );   
    });
}

// Example Usage
  console.log(add(10, 4));
  console.log(subtract(15, 5));
  console.log(multiply(8,8));
  console.log(divide(10,2));

  showHistory ()