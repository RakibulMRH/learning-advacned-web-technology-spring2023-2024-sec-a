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
