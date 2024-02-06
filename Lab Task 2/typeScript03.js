"use strict";
//Built-in Types (any, enum, tuple)
// any type
let data;
data = 'something';
console.log(data); //something
// enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let color = Color.Red;
let color2 = Color.Green;
let colorName = Color[2];
console.log(color); //0
console.log(color2); //1
console.log(colorName); //Blue
//tuple type
let employee;
employee = [1, "Steve"];
console.log(employee); //[1, "Steve"]
//Arrays
let numbers = [1, 2, 3, 4, 5];
//Accessing array elements
let firstElement = numbers[0];
let secondElement = numbers[1];
console.log(firstElement); //1
console.log(secondElement); //2
//Array length
let arrayLength = numbers.length;
//Adding elements to an array
numbers.push(6);
//Removing elements from an array
numbers.pop(); //removes last element
//Updating an element`
numbers[0] = 10;
//Iterating through an array
for (let num of numbers) {
    console.log(num);
}
//array methods
let doubleNumbers = numbers.map((num) => num * 2); //map method returns a new array
let evenNumbers = numbers.filter((num) => num % 2 == 0); //filter method returns a new array
let sum = numbers.reduce((a, b) => a + b); //reduce method returns a single value
