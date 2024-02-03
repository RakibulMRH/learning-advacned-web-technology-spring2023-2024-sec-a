//Template Literal 
//is a new way to create a string in JavaScript. It is enclosed by backticks (` `) instead of single or double quotes. 
//It can contain placeholders, which are indicated by the dollar sign and curly braces (${expression}). The expressions in the placeholders and the text between the backticks (` `) get passed to a function. 
//The default function just concatenates the parts into a single string. However, you can use a tagged template to perform a more advanced operation on the template literal.

//Example 1
let name = "John";
let age = 24;
let sentence = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(sentence); //Hello, my name is John and I am 24 years old.

//Example 2
let a = 10;
let b = 20;
let result = `The sum of ${a} and ${b} is ${a + b}`;
console.log(result); //The sum of 10 and 20 is 30

//Example 3
let x = 10;
let y = 20;
let z = 30;
let equation = `${x} + ${y} = ${z}`;
console.log(equation); //10 + 20 = 30
//In the above example, the placeholders ${x}, ${y}, and ${z} are replaced by the values of x, y, and z, respectively.
//The expression ${x + y} is evaluated and replaced by the result of the addition operation.
//The resulting string is assigned to the variable equation.
//The backticks (` `) are used to enclose the template literal.
//The placeholders are indicated by the dollar sign and curly braces (${expression}).

//Example 4
const multiLine = `This is a
multi-line
string`;
console.log(multiLine);
//This is a
//multi-line
//string
//In the above example, the template literal spans multiple lines.

