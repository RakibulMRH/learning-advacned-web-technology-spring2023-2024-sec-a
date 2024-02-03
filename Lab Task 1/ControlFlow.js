//control flow
// if (age >=18) {
//     console.log("Adult");
// }
// else if (age >=13) {
//     console.log("Teenager");
// }
// else {
//     console.log("Minor");
// }

let age = 16;
let status;
//let status = (age >= 18) ? "Adult" : (age >= 13) ? "Teenager" : "Minor";

switch (true) {
    case (age >= 18):
        status = "Adult";
        break;
    case (age >= 13):
        status = "Teenager";
        break;
    default:
        status = "Minor";
        break;
}
console.log(status);
