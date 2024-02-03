let x = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

//for loop
for (let i=0; i< x.length; i++) {
    //console.log(x[i]);
}

//while loop
let i = 0;
while (i < 4) {
    //console.log(x[i]);
    i++;
}

//do while loop
let j = 0;
do {
    //console.log(x[j]);
    j++;
} while (j < 4);

//for in loop
for (let index in x) {
    //console.log(x[index]);
}

//for of loop
for (let value of x) {
    //console.log(value);
}

//forEach loop
x.forEach(function(value, index) {
   // console.log(value);
});

//map loop
//The map() method creates a new array with the results of calling a function for every array element.
let y = x.map(function(value, index) {
   // return value;
});


//filter loop
//The filter() method creates a new array with array elements that passes a test.
let z = x.filter(function(value, index) {
    //return value;
});

//reduce loop
//The reduce() method reduces the array to a single value.
let sum = x.reduce(function(accumulator, currentValue) {
    //return accumulator + currentValue;
});
// console.log(sum);
// console.log(x);

//reduceRight loop
//The reduceRight() method reduces the array to a single value.
let sum2 = x.reduceRight(function(accumulator, currentValue) {
    //return accumulator + currentValue;
});
//console.log(sum2);

//every loop
//The every() method checks if all elements in an array pass a test (provided as a function).
let allOver4 = x.every(function(value, index) {
    return value > 4;
});

//some loop
//The some() method checks if any of the elements in an array pass a test (provided as a function).
let someOver4 = x.some(function(value, index) {
    return value > 4;
});
//console.log(someOver4);

//find loop
//The find() method returns the value of the first element in an array that pass a test (provided as a function).
let firstOver4 = x.find(function(value, index) {
    return value > 4;
});

//findIndex loop
//The findIndex() method returns the index of the first element in an array that pass a test (provided as a function).
let firstOver4Index = x.findIndex(function(value, index) {
    return value > 4;
});

//indexOf loop
//The indexOf() method searches the array for the specified item, and returns its position.
let index = x.indexOf('c');
//console.log(index);

//lastIndexOf loop
//The lastIndexOf() method searches the array for the specified item, and returns its position.
let lastIndex = x.lastIndexOf('c');
//console.log(lastIndex);

//includes loop
//The includes() method determines whether an array contains a specified element.
let includes = x.includes('c');

//Array.from loop
//The Array.from() method returns an Array object from any object with a length property or an iterable object.
let array = Array.from('ABCDEFG');
//console.log(array);

//Array.isArray loop
//The Array.isArray() method checks whether an object is an array.
let isArray = Array.isArray(x);
//console.log(isArray);

//Array.of loop
//The Array.of() method creates an array from its arguments.

let arr = Array.of(1, 2, 3, 4, 5);
//console.log(arr);

//concat loop
//The concat() method is used to join two or more arrays.
let arr2 = arr.concat(x);
//console.log(arr2);

//copyWithin loop
//The copyWithin() method copies array elements to another position in the array, overwriting the existing values.
let arr3 = arr.copyWithin(0, 3);
//console.log(arr3);

//entries loop
//The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.   
let iterator = arr.entries();
console.log("Entries: ");
console.log(iterator.next().value);//
console.log(iterator.next().value);//
console.log(iterator.next().value);//
console.log(iterator.next().value);//
console.log(iterator.next().value);// not undefined
console.log(iterator.next().value);// undefined
console.log(iterator.next().value);// undefined
console.log(iterator.next().value);// undefined
//undefined because the array has only 5 elements
//