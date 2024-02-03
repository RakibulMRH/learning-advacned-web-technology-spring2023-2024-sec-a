//Destructure

//1. Array Destructure
//Example 1
let arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a); //Output: 1
console.log(b); //Output: 2
console.log(c); //Output: 3
//In the above example, the array arr is destructured into three variables a, b, and c.
//The value of a is 1, the value of b is 2, and the value of c is 3.
//Example 2
let arr2 = [1, 2, 3];
let [x, y] = arr2;
console.log(x); //Output: 1
console.log(y); //Output: 2

//2. Object Destructure
//Example 1
let obj = { name: 'John', age: 23 };
let { name, age } = obj;
console.log(name); //Output: John
console.log(age); //Output: 23
//In the above example, the object obj is destructured into two variables name and age.
//The value of name is John and the value of age is 23.
//Example 2
let obj2 = { name22: 'John', age2: 23 };
let { name22 } = obj2;
console.log(name22); //Output: John
//In the above example, the object obj2 is destructured into a variable name2.
//The value of name22 is John.
//Example 3
let obj3 = { name3: 'John', age3: 23 };
let { name3: myName, age3: myAge } = obj3;
console.log(myName); //Output: John
console.log(myAge); //Output: 23
//In the above example, the object obj3 is destructured into two variables myName and myAge.

//3. Destructure in Function
//Example 1
function greet({ name, age }) {
    console.log('Hello ' + name + '. You are ' + age + ' years old.');
}
greet({ name: 'John', age: 23 });
console.log(name); //Output: ReferenceError: name is not defined
console.log(age); //Output: ReferenceError: age is not defined
//Output
//Hello John. You are 23 years old.
//In the above example, the object is destructured in the function parameter itself.
//Example 2
function greet2({ name, age }) {
    console.log('Hello ' + name + '. You are ' + age + ' years old.');
}
let obj4 = { name: 'John', age: 23 };
greet2(obj4);
//Output
//Hello John. You are 23 years old.

//4. Destructure in Array of Objects
//Example 1
let arr3 = [
    { name: 'John', age: 23 },
    { name: 'Andrew', age: 25 },
    { name: 'Ryan', age: 21 }
];
let [john, andrew, ryan] = arr3;
console.log(john.name); //Output: John
console.log(andrew.name); //Output: Andrew
console.log(ryan.name); //Output: Ryan
//In the above example, the array arr3 is destructured into three objects john, andrew, and ryan.
//The name property of each object is accessed using the dot notation.
//Example 2
let arr4 = [
    { name: 'John', age: 23 },
    { name: 'Andrew', age: 25 },
    { name: 'Ryan', age: 21 }
];
let [, { name: name2 }] = arr4;
console.log(name2); //Output: Andrew
//In the above example, the array arr4 is destructured into two objects.
//The name property of the second object is accessed using the dot notation.
//Example 3
let arr5 = [
    { name: 'John', age: 23 },
    { name: 'Andrew', age: 25 },
    { name: 'Ryan', age: 21 }
];
let [, , { name: name3 }] = arr5;
console.log(name3); //Output: Ryan
//In the above example, the array arr5 is destructured into three objects.
//The name property of the third object is accessed using the dot notation.

//5. Destructure in Nested Objects
//Example 1
let obj5 = {
    name: 'John',
    age: 23,
    address: {
        city: 'New York',
        state: 'NY'
    }
};
let { name: myName2, age: myAge2, address: { city, state } } = obj5;
console.log(myName2); //Output: John
console.log(myAge2); //Output: 23
console.log(city); //Output: New York
console.log(state); //Output: NY
//In the above example, the object obj5 is destructured into variables myName2, myAge2, city, and state.
//The city and state properties are accessed using the dot notation.
//Example 2
let obj6 = {
    name: 'John',
    age: 23,
    address: {
        city: 'New York',
        state: 'NY'
    }
};
let { name: myName3, age: myAge3, address: { city: myCity, state: myState } } = obj6;
console.log(myName3); //Output: John
console.log(myAge3); //Output: 23
console.log(myCity); //Output: New York
console.log(myState); //Output: NY
//In the above example, the object obj6 is destructured into variables myName3, myAge3, myCity, and myState.
//The city and state properties are accessed using the dot notation.

//6. Destructor in Nested Array
//Example 1
let arr6 = [1, 2, [3, 4, 5], 6];
let [p, q, [r, s, t], u] = arr6;
console.log(p); //Output: 1
console.log(q); //Output: 2
console.log(r); //Output: 3
console.log(s); //Output: 4
console.log(t); //Output: 5
console.log(u); //Output: 6
//In the above example, the array arr6 is destructured into variables p, q, r, s, t, and u. 
//The nested array is destructured into variables r, s, and t.
//Example 2
let arr7 = [1, 2, [3, 4, 5], 6];
let [p2, q2, [, , t2], u2] = arr7;
console.log(p2); //Output: 1
console.log(q2); //Output: 2
console.log(t2); //Output: 5
console.log(u2); //Output: 6
//In the above example, the array arr7 is destructured into variables p2, q2, t2, and u2.
//The nested array is destructured into variable t2.

//7. Destructure in Function Parameters
//Example 1
function greet3({ name, age }) {
    console.log('Hello ' + name + '. You are ' + age + ' years old.');
}
greet3({ name: 'John', age: 23 });
//Output
//Hello John. You are 23 years old.
//In the above example, the object is destructured in the function parameter itself.
//Example 2
function greet4({ name, age }) {
    console.log('Hello ' + name + '. You are ' + age + ' years old.');
}
let obj7 = { name: 'John', age: 23 };
greet4(obj7);
//Output
//Hello John. You are 23 years old.
//In the above example, the object is destructured in the function argument itself.
//Example 3
function greet5({ name, age }) {
    console.log('Hello ' + name + '. You are ' + age + ' years old.');
}
let obj8 = { name: 'John', age: 23 };
greet5(obj8);
//Output
//Hello John. You are 23 years old.
//In the above example, the object is destructured in the function argument itself.

//8. Destructure in Nested Array of Objects
//Example 1
let arr8 = [
    { name: 'John', age: 23 },
    { name: 'Andrew', age: 25 },
    { name: 'Ryan', age: 21 }
];
let [john2, andrew2, ryan2] = arr8;
console.log(john2.name); //Output: John

//9. Destructure in Nested Object of Arrays
//Example 1
let obj9 = {
    name: 'John',
    age: 23,
    friends: ['Andrew', 'Ryan']
};
let { name: myName4, age: myAge4, friends: [friend1, friend2] } = obj9;
console.log(myName4); //Output: John
console.log(myAge4); //Output: 23






