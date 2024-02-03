class Person
{
    constructor(name, age,)
    {
        this.name = name;
        this.age = age;
    }
    speak()
    {
        console.log("Hello, my name is " + this.name);
    }
}

const john = new Person("John", 24);
john.speak();
console.log(Object.is(john, john));//true


//Class inheritance
class Student extends Person
{
    constructor(name, age, cgpa)
    {
        super(name, age);
        this.cgpa = cgpa;
    }
    study()
    {
        console.log(this.name + "'s CGPA is " + this.cgpa);
    }
}
const alice = new Student("Alice", 24, 3.75);
alice.speak();
alice.study();

//Object Methods
console.log(Object.keys(alice));//[ 'name', 'age', 'cgpa' ]
console.log(Object.values(alice));//[ 'Alice', 24, 3.75 ]
console.log(Object.entries(alice));//[ [ 'name', 'Alice' ], [ 'age', 24 ], [ 'cgpa', 3.75 ] ]
console.log(Object.getOwnPropertyNames(alice));//[ 'name', 'age', 'cgpa' ]
console.log(Object.getOwnPropertyDescriptors(alice));//{ name: { value: 'Alice', writable: true, enumerable: true, configurable: true }, age: { value: 24, writable: true, enumerable: true, configurable: true }, cgpa: { value: 3.75, writable: true, enumerable: true, configurable: true } }
console.log(Object.isExtensible(alice));//true
console.log(Object.isFrozen(alice));//false
console.log(Object.isSealed(alice));//false
console.log(Object.is(alice, john));//false
console.log(Object.is(alice, alice));//true
Object.freeze(alice);
console.log(Object.isFrozen(alice));//true
console.log(Object.isExtensible(alice));//false
console.log(Object.isSealed(alice));//true

