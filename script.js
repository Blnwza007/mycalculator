const calculator = {
    expression: "",
    display: document.getElementById("display"),
    operator: ["+", "-", "*", "/"]
};

function press(value) {
    if (calculator.display.value === "Error" || calculator.display.value === "Wrong Input" ||calculator.display.value === "Cannot divide by zero") {
            calculator.expression = " ";
            calculator.display.value = calculator.expression;
        }
    if (value === ".") {
        calculator.expression += value;
    }     
    else if (isNaN(value)) {
        calculator.expression += ` ${value} `;
    } else {
        calculator.expression += value;
    }
    calculator.display.value = calculator.expression; 
}

function result() {
    try {
        let hasOperator = false;
    
        for (const char of calculator.expression) { 
            
            if (calculator.operator.includes(char)) { 
                hasOperator = true
            }
        }

        if (!hasOperator) { 
            calculator.expression = "Wrong Input";
            calculator.display.value = calculator.expression;
            return; 
        } 
        
        const tokens = calculator.expression.trim().split(/\s+/);
        
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] === "/" && Number(tokens[i + 1]) === 0) {
                calculator.expression = "Cannot divide by zero";
                calculator.display.value = calculator.expression;
                return;
            }
        }
        if (hasOperator) {
            const result = Function(`return ${calculator.expression}`)(); 
            calculator.expression = String(result); 
            calculator.display.value = calculator.expression; 
        }

    } catch (error) {
        calculator.expression = "Error";
        calculator.display.value = calculator.expression;
        return;
    }
}

function del() {
    const errorMsg = ["Error", "Wrong Input", "Cannot divide by zero"];
    for (const char of errorMsg) {
        if (calculator.display.value.includes(char)) {
            calculator.expression = "";
            calculator.display.value = calculator.expression;
            break;
        }
    }

    calculator.expression = calculator.expression.trim();
    const tokens = calculator.expression.split(/\s+/);
    tokens.pop();
    calculator.expression = tokens.join(" ");
    calculator.display.value = calculator.expression || "0";
}

function delALL() {
    calculator.expression = "";
    calculator.display.value = calculator.expression;
}