//Operators
//1. Arithmetic Operators
//2. Comparison Operators
//3. Logical Operators
//4. Assignment Operators
//5. Conditional (Ternary) Operator
//6. Bitwise Operators
//7. Type Operators
//8. String Operators
//9. Comma Operator
//10. Unary Operators
//11. Relational Operators
//12. Exponentiation Operator
//13. Grouping Operator
//14. Destructuring Assignment
//15. Spread Operator
//16. Nullish Coalescing Operator
//17. Optional Chaining Operator
//18. delete Operator
//19. in Operator
//20. instanceof Operator
//21. new Operator
//22. this Operator
//23. typeof Operator
//24. void Operator
//25. yield Operator
//26. await Operator
//27. super Operator
//28. class Operator
//29. function Operator
//30. get Operator
//31. set Operator
//32. import Operator

//1. Arithmetic Operators
let x = 5;
let y = 2;
console.log(x + y); //7
console.log(x - y); //3
console.log(x * y); //10
console.log(x / y); //2.5
console.log(x % y); //1
console.log(x ** y); //25

//2. Comparison Operators
console.log(x == y); //false
console.log(x != y); //true
console.log(x === y); //false
console.log(x !== y); //true
console.log(x > y); //true
console.log(x < y); //false
console.log(x >= y); //true
console.log(x <= y); //false

//3. Logical Operators
let a = true;
let b = false;
console.log(a && b); //false
console.log(a || b); //true
console.log(!a); //false
console.log(!b); //true

//4. Assignment Operators
let z = 10;
z += 5; //15
z -= 5; //10
z *= 5; //50
z /= 5; //10
z %= 5; //0
z **= 5; //100000

//5. Conditional (Ternary) Operator
let age = 24;
let voteable = (age < 18) ? "Too young" : "Old enough";
console.log(voteable);

//6. Bitwise Operators
let m = 5; //101
let n = 3; //011
console.log(m & n); //1 (001) AND operator sets each bit to 1 if both bits are 1
console.log(m | n); //7 (111) OR operator sets each bit to 1 if one of two bits is 1
console.log(m ^ n); //6 (110) XOR operator sets each bit to 1 if only one of two bits is 1
console.log(~m); //-6 (11111111111111111111111111111010) NOT operator inverts all the bits
console.log(m << 1); //10 (1010) left shift operator shifts the bits to the left
console.log(m >> 1); //2 (10) right shift operator shifts the bits to the right
console.log(m >>> 1); //2 (10) zero-fill right shift operator shifts the bits to the right and fills 0 on the left

//7. Type Operators
console.log(typeof 5); //number
console.log(typeof "john"); //string
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof [1, 2, 3, 4]); //object
console.log(typeof {name: "john", age: 24}); //object
console.log(typeof function(){}); //function
console.log(typeof new Date()); //object
console.log(typeof new Error()); //object
console.log(typeof Symbol()); //symbol
console.log(typeof BigInt(123)); //bigint

//8. String Operators
let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName); //John Doe
console.log(firstName += lastName); //John Doe

//9. Comma Operator
let p = 5;
let q = 2;
let r = 3;
console.log(p, q, r); //5 2 3

//10. Unary Operators
let s = 5;
console.log(-s); //-5
console.log(+s); //5
console.log(++s); //6
console.log(--s); //5
console.log(s++); //5
console.log(s--); //6
console.log(~s); //-6
console.log(!s); //false
console.log(typeof s); //number
//console.log(delete s); //false
console.log(void s); //undefined
console.log(typeof s); //undefined

//11. Relational Operators
let t = 5;
let u = 2;
console.log(t in [1, 2, 3, 4, 5]); //true
console.log(u in [1, 2, 3, 4, 5]); //true
console.log(t instanceof Number); //false
console.log(u instanceof Number); //false

//12. Exponentiation Operator
let v = 5;
let w = 2;
console.log(v ** w); //25

//13. Grouping Operator
let xx = 5;
let yy = 2;
console.log((xx + yy) * 10); //70

//14. Destructuring Assignment
let [a1, b1] = [1, 2];
console.log(a1); //1
console.log(b1); //2

let {c1, d1} = {c1: 3, d1: 4};
console.log(c1); //3
console.log(d1); //4

//15. Spread Operator
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1, 6, 7, 8, 9, 10];
console.log(arr2); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//16. Nullish Coalescing Operator
let aa = null;
let bb = 5;
let cc = aa ?? bb;
console.log(cc); //5

//17. Optional Chaining Operator
let person = {
    name: "John",
    age: 24
};
console.log(person.name); //John
console.log(person.age); //24
console.log(person.address?.city); //undefined

//18. delete Operator
let person1 = {
    name: "John",
    age: 24
};
console.log(person1.name); //John
delete person1.name;
console.log(person1.name); //undefined

//19. in Operator
let person2 = {
    name: "John",
    age: 24
};  
console.log("name" in person2); //true
console.log("age" in person2); //true
console.log("address" in person2); //false

//20. instanceof Operator
let person3 = {
    name: "John",
    age: 24
};
console.log(person3 instanceof Object); //true
console.log(person3 instanceof Array); //false

//21. new Operator
let person4 = new Object();
person4.name = "John";
person4.age = 24;
console.log(person4.name); //John
console.log(person4.age); //24

//22. this Operator
let person5 = {
    name: "John",
    age: 24,
    speak: function() {
        console.log("Hello, my name is " + this.name);
    }
};
person5.speak(); //Hello, my name is John

//23. typeof Operator
let person6 = {
    name: "John",
    age: 24
};
console.log(typeof person6); //object
console.log(typeof person6.name); //string
console.log(typeof person6.age); //number

//24. void Operator
let person7 = {
    name: "John",
    age: 24
};
console.log(void person7); //undefined

//25. yield Operator
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}
let gen = generator();
console.log(gen.next().value); //1
console.log(gen.next().value); //2
console.log(gen.next().value); //3

//26. await Operator
async function myFunction() {
    return "Hello";
}
myFunction().then(
    function(value) {
        console.log(value);
    }
);//Hello   
///await is used to wait for a promise to resolve   
///await can only be used inside an async function  
///await pauses the execution of the async function until the promise is resolved
///await returns the resolved value of the promise
///await can only be used with a promise

//27. super Operator
class Person8 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student8 extends Person8 {
    constructor(name, age, cgpa) {
        super(name, age);
        this.cgpa = cgpa;
    }
}
const alice8 = new Student8("Alice", 24, 3.75);
console.log(alice8.name); //Alice
console.log(alice8.age); //24
console.log(alice8.cgpa); //3.75

//28. class Operator
class Person9 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const john9 = new Person9("John", 24);
console.log(john9.name); //John
console.log(john9.age); //24

//29. function Operator
let myFunction2 = new Function("a", "b", "return a * b");
console.log(myFunction2(5, 2)); //10

//30. get Operator
let person10 = {
    FirstName: "John",
    LastName: "Doe",
    age: 24,
    get fullName() {
        return this.FirstName + " " + this.LastName;
    }
};
console.log(person10.fullName); //John Doe

//31. set Operator
let person11 = {
    FirstName: "John",
    LastName: "Doe",
    age: 24,
    set fullName(value) {
        [this.FirstName, this.LastName] = value.split(" ");
    }
};
person11.fullName = "Alice Cooper";
console.log(person11.FirstName); //Alice
console.log(person11.LastName); //Cooper

//32. import Operator
import {name, age} from "./classes&objects.js";
console.log(name); //John
console.log(age); //24
//import is used to import functions, objects or primitives that have been exported from an external module
//import can only be used in ES6 modules
//import is not supported in Node.js
//import is not supported in Internet Explorer
//import is not supported in Opera
//import is not supported in Safari
//import is not supported in Edge
//import is not supported in Firefox
//import is not supported in Chrome
//import is not supported in Android Browser
//import is not supported in iOS Safari
//import is not supported in Samsung Internet