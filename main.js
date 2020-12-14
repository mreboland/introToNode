const calc = require("./calc");

// We will get the numbers, and the operation that we are using for the calculation from the command line using our process.argv array.
// in cmd, a is the 3rd arg, b is the 4th and so on.
// node main.js 1 2 + will run the add calc is the + is fed into the operator
const a = process.argv[2];
const b = process.argv[3];
const operator = process.argv[4];

// Use the switch statement to select one of many code blocks to be executed.
switch(operator) {
    case "+": {
        // calling the add function from calc.js
        console.log(calc.add(a, b));
        break;
    }
    case "-": {
        console.log(calc.subtract(a, b));
        break;
    }
}