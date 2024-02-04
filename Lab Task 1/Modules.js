//modules

//Named Export
export class Person8 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
export class Student8 extends Person8 {
    constructor(name, age, cgpa) {
        super(name, age);
        this.cgpa = cgpa;
    }
}
//Default Export
export default class Person9 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//Function Export
export function myFunction2(a, b) {
    return a * b;
}
//Get Export
export let person10 = {
    FirstName: "John",
    LastName: "Doe",
    age: 24,
    get fullName() {
        return this.FirstName + " " + this.LastName;
    }
};
//Set Export
export let person11 = {
    FirstName: "John",
    LastName: "Doe",
    age: 24,
    set fullName(value) {
        [this.FirstName, this.LastName] = value.split(" ");
    }
};

//33. export Operator
export let name = "John";
export let age = 24;
export function greet() {
    console.log("Hello, my name is " + name);
}
//34. import Operator
import { name, age, greet } from './Modules.js';
console.log(name); //John
console.log(age); //24
greet(); //Hello, my name is John
//35. export default Operator
let name2 = "John";
let age2 = 24;
function greet2() {
    console.log("Hello, my name is " + name2);
}
export default greet2;
//36. import default Operator
import greet2 from './Modules.js';
greet2(); //Hello, my name is John
//37. import * Operator
import * as person from './Modules.js';
console.log(person.name); //John
console.log(person.age); //24
person.greet(); //Hello, my name is John

//38. export * Operator
export { name, age, greet };

//39. import * as name Operator
import * as person from './Modules.js';
console.log(person.name); //John
console.log(person.age); //24
person.greet(); //Hello, my name is John

//40. import * as name from Operator
import * as person from './Modules.js';
console.log(person.name); //John
console.log(person.age); //24
person.greet(); //Hello, my name is John

//41. import * as * from Operator
import * as person from './Modules.js';
console.log(person.name); //John
console.log(person.age); //24
person.greet(); //Hello, my name is John

//42. import * as name from * Operator
import * as person from './Modules.js';
console.log(person.name); //John