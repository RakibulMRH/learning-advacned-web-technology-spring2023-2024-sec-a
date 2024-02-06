//Type Allias
type Person = { id: number, name: string, age: number, salary: number };
let p: Person = { id: 1, name: "John", age: 25, salary: 20000 };
console.log(p.id, p.name, p.age, p.salary); //1 John 25 20000

//Type Union
let y: number | string;//y can be number or string
y = 10;
console.log(y); //10


//Literal Type
let z: "Red" | "Green" | "Blue";//z can only be Red, Green or Blue
z = "Red";
console.log(z); //Red

