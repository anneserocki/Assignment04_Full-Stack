// ADD A PRIVATE FUNCTION CALLED CALCULATE
const calculate = function (num1, num2, operator) {
  switch(operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return NaN;
  };
};

// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
const add = function (num1, num2) {
  calculate(num1, num2, '+')
}
    
// SUBTRACT FUNCTION
const sub = function (num1, num2) {
  calculate(num1, num2, '-')
}

// MULTIPLY FUNCTION
const mul = function (num1, num2) {
  calculate(num1, num2, '*')
}

// DIVIDE FUNCTION
const div = function (num1, num2) {
  calculate(num1, num2, '/')
}

// EXPORT THE FOUR PUBLIC FUNCTIONS

export {add};
export {sub};
export {mul};
export {div};