"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//OOP
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log(this.id, this.name);
    }
}
let emp1 = new Employee(1, "Steve");
emp1.display(); //1 Steve
//Access Modifiers (public, private, protected)
class Employee2 {
    constructor(id, name, age, isOkay) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.isOkay = isOkay;
    }
    display() {
        console.log(`id = ${this.id}, name = ${this.name}, Age = ${this.age}, isOkay = ${this.isOkay}`);
    }
}
let emp2 = new Employee2(1, "Steve", 25, true);
emp2.display(); //id = 1, name = Steve, Age = 25, isOkay = true
//Inheritance
class Manager extends Employee2 {
    constructor(id, name, age, isOkay, department) {
        super(id, name, age, isOkay);
        this.department = department;
    }
    display() {
        super.display();
        console.log(`Department = ${this.department}`);
    }
}
let mgr = new Manager(2, "John", 30, true, "Sales");
mgr.display(); //id = 2, name = John, Age = 30, isOkay = true, Department = Sales
//Abstract Class
class Personal {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Student extends Personal {
    constructor(id, name, age) {
        super(id, name);
        this.age = age;
    }
    display() {
        console.log(`id = ${this.id}, name = ${this.name}, Age = ${this.age}`);
    }
}
let std = new Student(1, "Steve", 25);
std.display(); //id = 1, name = Steve, Age = 25
class Employee6 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log(`id = ${this.id}, name = ${this.name}`);
    }
}
let emp6 = new Employee6(1, "Steve");
emp6.display(); //id = 1, name = Steve
//interface with generics 
function display(id, name) {
    console.log(`id = ${id}, name = ${name}`);
}
display(101, "Steve"); //id = 101, name = Steve
display("102", "John"); //id = 102, name = John
const typeScript06Modules_Namespaces_1 = require("./typeScript06Modules&Namespaces");
console.log(typeScript06Modules_Namespaces_1.greeting); //Hello World
console.log(typeScript06Modules_Namespaces_1.funcs.add(10, 20)); //30
console.log(typeScript06Modules_Namespaces_1.funcs.sub(10, 20)); //-10
