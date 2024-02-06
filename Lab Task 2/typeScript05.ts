//functions
function add(x: number, y: number): number {
    return x + y;
}
console.log(add(10, 20)); //30

//arrow functions
let add2 = (x: number, y: number): number =>  x + y;
console.log(add2(10, 20)); //30

//optional parameters
function addNumbers(x: number, y: number, z?: number): number {
    return x + y + (z ?? 0); //if z is undefined, use 0
}
console.log(addNumbers(10, 20)); //30

//default parameters
function addNumbers2(x: number, y: number, z: number = 0): number {
    return x + y + z;
}
console.log(addNumbers2(10, 20)); //30

//rest parameters
function addNumbers3(...nums: number[]): number {
    let sum: number = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}
console.log(addNumbers3(10, 20, 30)); //60
console.log(addNumbers3(10, 20, 30, 40, 50)); //150

//function overloading
function addNumbers4(x: number, y: number): number; //function signature
function addNumbers4(x: string, y: string): string; //function overloading by changing return type
function addNumbers4(x: any, y: any): any {
    return x + y;
}
console.log(addNumbers4(10, 20)); //30
console.log(addNumbers4("Hello", "World")); //HelloWorld

