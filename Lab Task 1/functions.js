function greet(name) {
  console.log(`Hello + ${name}!`);//use backticks to use template literals
}

greet("World");

//function Return
function add(x, y) {
  return x + y;
}

let sum = add(1, 2);
console.log(sum);

//Arrow Functions
let greet2 = name => console.log(`Hello ${name}!`);
greet2("World");

//anonymous function
const greet3 = function(name) {
  console.log(`Hello ${name}!`);
};
greet3("World");

//passing function as a parameter
function operateOnNumber(a, b , operation) {
  return operation(a, b);
}

//function to add two numbers
function add(a, b) {
  return a + b;
}

//function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

//using the highert order function with different operations
let resultAddition = operateOnNumber(1, 2, add);// 5+3 = 8
let resultMultiplication = operateOnNumber(1, 2, multiply);// 5*3 = 15
