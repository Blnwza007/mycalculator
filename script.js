const calculator = {
    expression: "",
    display: document.getElementById("display"),
    operator: ["+", "-", "*", "/"]
};

function press(value) {
    if (isNaN(value)) {
        calculator.expression += ` ${value} `;
    } else {
        calculator.expression += value;
    }
    calculator.display.value = calculator.expression; 
}

function result() {
    let hasOperator = false;
    for (const char of calculator.expression) {
        if (calculator.operator.includes(char)) {
            hasOperator = true;
        } 
        if (hasOperator) {
            calculator.display.value = "Namkhing is hippo 🦛🦛";
            calculator.expression = calculator.display.value;
        }
    }
}

function del() {
    calculator.expression = calculator.expression.slice(0, -1);
    calculator.display.value = calculator.expression;
}

function delALL() {
    calculator.expression = "";
    calculator.display.value = calculator.expression;
}