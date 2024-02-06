//OOP
class Employee{
    id: number;
    name: string;
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
    display(): void{
        console.log(this.id, this.name);
    }   
}

let emp1 = new Employee(1, "Steve");
emp1.display(); //1 Steve

//Access Modifiers (public, private, protected)
class Employee2{
    private id: number;
    private name: string;
    protected age: number;
    public isOkay: boolean;
    constructor(id: number, name: string, age: number, isOkay: boolean){
        this.id = id;
        this.name = name;
        this.age = age;
        this.isOkay = isOkay;
    }

    display(): void{
        console.log(`id = ${this.id}, name = ${this.name}, Age = ${this.age}, isOkay = ${this.isOkay}`);
    }
}
let emp2 = new Employee2(1, "Steve", 25, true);
emp2.display(); //id = 1, name = Steve, Age = 25, isOkay = true

//Inheritance
class Manager extends Employee2{
    private department: string;
    constructor(id: number, name: string, age: number, isOkay: boolean, department: string){
        super(id, name, age, isOkay);
        this.department = department;
    }
    display(): void{
        super.display();
        console.log(`Department = ${this.department}`);
    }
}
let mgr = new Manager(2, "John", 30, true, "Sales");
mgr.display(); //id = 2, name = John, Age = 30, isOkay = true, Department = Sales

//Abstract Class
abstract class Personal{
    id: number;
    name: string;
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
    abstract display(): void;
}
class Student extends Personal{
    age: number;
    constructor(id: number, name: string, age: number){
        super(id, name);
        this.age = age;
    }
    display(): void{
        console.log(`id = ${this.id}, name = ${this.name}, Age = ${this.age}`);
    }
}
let std = new Student(1, "Steve", 25);
std.display(); //id = 1, name = Steve, Age = 25

//Generics & interfaces
interface IEmployee{
    id: number;
    name: string;
    display(): void;
}

class Employee6 implements IEmployee{
    id: number;
    name: string;
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
    display(): void{
        console.log(`id = ${this.id}, name = ${this.name}`);
    }
}
let emp6 = new Employee6(1, "Steve");
emp6.display(); //id = 1, name = Steve
//interface with generics 

function display<T>(id: T, name: T): void{
    console.log(`id = ${id}, name = ${name}`);
}
display<number | string>(101, "Steve"); //id = 101, name = Steve
display<string>("102", "John"); //id = 102, name = John

import { greeting, funcs } from "./typeScript06Modules&Namespaces";
console.log(greeting); //Hello World
console.log(funcs.add(10, 20)); //30
console.log(funcs.sub(10, 20)); //-10
