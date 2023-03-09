// IMPORT THE MODULE
// import * as calculator from './modules/calculator.js';
import {add} from './modules/calculator.js';
import {sub} from './modules/calculator.js';
import {mul} from './modules/calculator.js';
import {div} from './modules/calculator.js';

// COLLECT FIRST NUMBER FROM USER
let num1
do {
    num1 = Number(prompt('Enter the first number: '));
  } while (isNaN(num1));
// COLLECT SECOND NUMBER FROM USER
let num2
do {
    num2 = Number(prompt('Enter the second number: '));
  } while (isNaN(num2));
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let operator
do {
    operator = prompt('Enter the operator (+, -, *, /): ');
  } while (!['+', '-', '*', '/'].includes(operator));

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION
let calcResult = 0
switch(operator) {
  case '+':
    calcResult = add(num1, num2);
    break;
  case '-':
    calcResult = sub(num1, num2);
    break;
  case '*':
    calcResult = mul(num1, num2);
    break;
  case '/':
    calcResult = div(num1, num2);
    break;
}

if (isNaN(calcResult)) {
  alert('Invalid operator!');
} else {
  alert(`The result is: ${calcResult}`);
}