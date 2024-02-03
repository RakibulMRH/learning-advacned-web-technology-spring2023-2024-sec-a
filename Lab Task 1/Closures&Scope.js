//closures and scope
//1. What is the result of the following code? Explain your answer.
 let a = 10;
 function test() {
    let a = 15;
     console.log(a); //Output: 15
 }
 test();
 console.log(a); //Output: 10
//In the above code, the variable a is declared twice. The first declaration is outside the function test() and the second declaration is inside the function test().
//The variable a inside the function test() is a different variable from the variable a outside the function test().
//The variable a inside the function test() is a local variable and the variable a outside the function test() is a global variable.
//The value of the local variable a is printed to the console inside the function test().
//The value of the global variable a is printed to the console outside the function test().
//2. What is the result of the following code? Explain your answer.
 //let a = 10;
 function test() {
     console.log(a); //Output: 10
 }
 test();
//In the above code, the variable a is declared outside the function test().
//The variable a is a global variable.
//The value of the global variable a is printed to the console inside the function test().
//3. What is the result of the following code? Explain your answer.
 //let a = 10;
 function test() {
     let b = 15;
     console.log(a); //Output: 10
     console.log(b); //Output: 15
 }
 test();
//In the above code, the variable a is declared outside the function test().
//The variable a is a global variable.
//The value of the global variable a is printed to the console inside the function test().
//The variable b is declared inside the function test().
//The variable b is a local variable.
//The value of the local variable b is printed to the console inside the function test().
//4. What is the result of the following code? Explain your answer.
 //let a = 10;
 function test() {
     let a = 15;
     console.log(a); //Output: 15
 }
 test();
 console.log(a); //Output: 10
//In the above code, the variable a is declared outside the function test().
//The variable a is a global variable.
//The value of the local variable a is printed to the console inside the function test().
