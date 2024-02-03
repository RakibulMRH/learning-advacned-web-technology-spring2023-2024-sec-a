//Asynchrnous javascript
//1. Callbacks
//2. Promises
//3. Async/Await

//1. Callbacks
//A callback is a function that is passed as an argument to another function and is executed after its parent function has completed.
//Callbacks are used to make sure that a function is not going to run before a task is completed but will run right after the task has completed.
//Callbacks can be synchronous or asynchronous.
//Callbacks are used in scenarios such as reading files, data retrieval, and event handling.
//Example 1
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}
function callMe() {
    console.log('I am callback function');
}
greet('John', callMe);
//Output
//Hello John
//I am callback function

//Example 2
function greet2(name, callback) {
    console.log('Hello ' + name);
    callback(name);
}
function callMe2(name) {
    console.log('I am callback function ' + name);
}
greet2('John', callMe2);
//Output
//Hello John
//I am callback function John

//2. Promises
//A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred).
//A promise can be in one of three states: pending, resolved, or rejected.
//A promise is a proxy for a value not necessarily known when the promise is created.
//It allows you to associate handlers with an asynchronous action’s eventual success value or failure reason.
//This lets asynchronous methods return values like synchronous methods: instead of the final value, the asynchronous method returns a promise of having a value at some point in the future.
//Example 1
let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Promise is resolved');
    }, 3000);
});
promise.then(function(data) {
    console.log(data);
});
//Output
//Promise is resolved
//In the above example, a promise is created using the new Promise() constructor.
//The promise is resolved after 3 seconds using the resolve() method.
//The then() method is used to handle the resolved value of the promise.

//Example 2
let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject('Promise is rejected');
    }, 3000);
});
promise2.then(function(data) {
    console.log(data);
}).catch(function(error) {
    console.log(error);
});
//Output
//Promise is rejected
//In the above example, a promise is created using the new Promise() constructor.
//The promise is rejected after 3 seconds using the reject() method.
//The then() method is used to handle the resolved value of the promise.
//The catch() method is used to handle the rejected value of the promise.

//Example 3
let myPromise = new Promise((resolve, reject) => {
    let condition = true; // This could be any condition for your asynchronous operation

    if(condition) {
        resolve('Promise is resolved'); // If the condition is true, we "resolve" the promise
    } else {
        reject('Promise is rejected'); // If the condition is false, we "reject" the promise
    }
});

myPromise
    .then(value => console.log(value)) // Logs "Promise is resolved" if the promise was resolved
    .catch(error => console.log(error)); // Logs "Promise is rejected" if the promise was rejected
//Output
//Promise is resolved


//3. Async/Await
//The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
//Async functions are functions that return a promise.
//The await keyword is used to wait for a promise to resolve or reject.
//The await keyword can only be used inside an async function.
//Example 1
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}   
async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: 'resolved'
}
asyncCall();
//Output
//calling
//*2 seconds delay*
//resolved
//In the above example, the async function asyncCall() is called.
//Inside the async function, the resolveAfter2Seconds() function is called using the await keyword.
//The await keyword pauses the execution of the async function until the promise is resolved.
//The resolved value of the promise is then printed to the console.
//The async and await keywords make the code look like synchronous code, but it is asynchronous.
//=> is a new way to define functions in ES6. It is a shorthand for function().

//Example 2
function resolveAfter2Seconds2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}
async function asyncCall2() {
    console.log('calling');
    var result = await resolveAfter2Seconds2();
    console.log(result);
    console.log('finished');
}
asyncCall2();
//Output
//calling
//*2 seconds delay*
//resolved
//finished

//Example 3
function resolveAfter2Seconds3() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}
async function asyncCall3() {
    console.log('calling');
    var result = await resolveAfter2Seconds3();
    console.log(result);
}
asyncCall3();
console.log('finished');
//Output
//calling
//finished
//*2 seconds delay*
//resolved
//In the above example, the async function asyncCall() is called.
//The resolveAfter2Seconds() function is called using the await keyword.
//The await keyword pauses the execution of the async function until the promise is resolved.
//The resolved value of the promise is then printed to the console.
//The finished message is printed to the console before the promise is resolved.
//This is because the async function is paused until the promise is resolved.
//The code after the async function is executed immediately.