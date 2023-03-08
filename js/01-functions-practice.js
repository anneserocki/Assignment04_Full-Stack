//STEP 1 For halfNumber()
// let result
// let enterNumber = parseFloat(prompt("Please enter a number: "));
// function halfNumber (num) {       
//     result = num/2         
// } ;
// halfNumber(enterNumber)
// console.log(`Half of ${enterNumber} is ${result}`)

//STEP 2 For squareNumber() 
// let oriNumber = parseFloat(prompt("Please enter a number: "));
// const squareNumber = (num) => console.log(`The result of squaring the number ${oriNumber} is ${num * num}.`);
// squareNumber(oriNumber);


//STEP 3 For percentOf()
// let perResult
// let oriNumber1 = parseFloat(prompt("Please enter a number: "))
// let oriNumber2 = parseFloat(prompt("Please enter a number: "))

// function percentOf(num1, num2) {    
//     perResult = (num1/num2)*100  
// };
// percentOf(oriNumber1, oriNumber2);
// console.log(`${oriNumber1} is ${perResult}% of ${oriNumber2}.`);

//STEP 4 For findModulus() 
let modNumber1 = parseFloat(prompt("Please enter a number: "));
let modNumber2 = parseFloat(prompt("Please enter a number: "));
const findModulus = (num1, num2) =>  console.log(`${modNumber1 % modNumber2} is the modulus of ${modNumber1} and ${modNumber2}.`);
findModulus(modNumber1, modNumber1);

//STEP 5 None