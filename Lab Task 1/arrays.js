//Arrays
//Arrays are used to store multiple values in a single variable:
//Example
let numbers = [1, 2, 3, 4, 5];  
let fruits = ['Apple', 'Banana', 'Orange'];
let mixedArray = [1, 'Apple', true, null, undefined, {name: 'john', age: 24}];

//Accessing Array Elements
let firstNumber = numbers[0]; //1
let secondFruit = fruits[1]; //Banana
let thirdElement = mixedArray[2]; //true
let lastElement = mixedArray[mixedArray.length - 1]; //{name: 'john', age: 24}
//console.log(lastElement);

//array methods
numbers.push(6); //adds 6 at the end of the array
fruits.pop(); //removes the last element of the array
fruits.unshift('Mango'); //adds Mango at the beginning of the array
fruits.shift(); //removes the first element of the array
numbers.splice(2, 1); //removes 1 element from index 2
numbers.splice(2, 0, 10); //adds 10 at index 2
//splice(2, 0, 10); how it works
//it works like this:
//1. remove 0 element from index 2 
//2. add 10 at index 2
//In the splice(2, 0, 10) method, the 0 is the second argument, 
//which specifies the number of elements to remove from the array starting at the index specified by the first argument.

//array iteration
numbers.splice(2, 1); //removes 1 element from index 2
numbers.forEach( /*callbackfn:*/function(number){
    //console.log(number);
});

//Array Iteration map
//The map() method creates a new array with the results of calling a function for every array element.
let doubledNumbers = numbers.map(function(number){
    return number * 2;
});
//console.log(doubledNumbers);

//array iteration filter
//The filter() method creates a new array with array elements that passes a test.
let filteredNumbers = numbers.filter(function(number){
    return number % 2 === 0;
});