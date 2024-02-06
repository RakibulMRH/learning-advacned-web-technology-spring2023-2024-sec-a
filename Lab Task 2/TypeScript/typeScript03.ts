//Built-in Types (any, enum, tuple)
// any type
let data: any;
data = 'something';
console.log(data); //something

// enum type
enum Color { Red, Green, Blue };   
let color: Color = Color.Red;
let color2: Color = Color.Green;
let colorName: string = Color[2];
console.log(color); //0
console.log(color2); //1
console.log(colorName); //Blue

//tuple type
let employee: [number, string];
employee = [1, "Steve"];
console.log(employee); //[1, "Steve"]

//Arrays
let numbers: number[] = [1, 2, 3, 4, 5];

//Accessing array elements
let firstElement: number = numbers[0];
let secondElement: number = numbers[1];
console.log(firstElement); //1
console.log(secondElement); //2

//Array length
let arrayLength: number = numbers.length;

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
let doubleNumbers: number[] = numbers.map((num) => num * 2); //map method returns a new array
let evenNumbers: number[] = numbers.filter((num) => num % 2 == 0); //filter method returns a new array
let sum: number = numbers.reduce((a, b) => a + b); //reduce method returns a single value
