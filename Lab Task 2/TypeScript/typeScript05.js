"use strict";
//functions
function add(x, y) {
    return x + y;
}
console.log(add(10, 20)); //30
//arrow functions
let add2 = (x, y) => x + y;
console.log(add2(10, 20)); //30
//optional parameters
function addNumbers(x, y, z) {
    return x + y + (z !== null && z !== void 0 ? z : 0); //if z is undefined, use 0
}
console.log(addNumbers(10, 20)); //30
//default parameters
function addNumbers2(x, y, z = 0) {
    return x + y + z;
}
console.log(addNumbers2(10, 20)); //30
//rest parameters
function addNumbers3(...nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}
console.log(addNumbers3(10, 20, 30)); //60
console.log(addNumbers3(10, 20, 30, 40, 50)); //150
function addNumbers4(x, y) {
    return x + y;
}
console.log(addNumbers4(10, 20)); //30
console.log(addNumbers4("Hello", "World")); //HelloWorld
