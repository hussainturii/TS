"use strict";
//primitive (number boolean string etc) and non primitive data types (arrays and objects)
// difference between array and object is that you can save more than one type of data types in an object.
// object = {}
// keys : value (cannot use = in object while assigninng values)
Object.defineProperty(exports, "__esModule", { value: true });
let obj = {
    name: "Hussain",
    age: 22,
    gender: "male",
    isUser: true,
};
console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj["isUser"]); //what is the difference between the two
// implicit typing (based on assigned value, it judges the type)
let name = "hussain"; //without declaring it any data type, it automatically gets that its string
//explicit aka strong typing
// we assign the type already
let age;
// const (declare + initialization)
// let (only declare without initializing its type)
// lexica scope = within the block search the values. (values taken from inside the block)
let z = 6;
if (true) {
    let z = 4; //(new variable, doesn't change the globle variable. but if we do "z = 4", it overwrites the globle value
    console.log("z is " + z); //because of lexica scope it gives us 4
}
else {
    let z = "string";
    console.log("z is " + z); //gives us string
}
console.log("z is " + z);
//assignment 1. block vs functional 2. lexica 3. dot and square bracket method
// block scope: variables declared using let or const inside a vblock can only be accessed inside that block.
{
    let p = 110;
    const q = 111;
}
console.log(p); // Uncaught ReferenceError: p is not defined
console.log(q); // Uncaught ReferenceError: q is not defined
//functional scope: variables declared inside a block using "var" is accessed according to the nearest function.
function printIfGFG(text) {
    var message;
    if (text == "GeeksforGeeks" || text == "GFG") {
        message = "Verified Geek";
        console.log(message); // Output: Verified Geek
    }
    console.log(message); // Output: Verified Geek
}
// values of variables declared using let can be changed but no redeclared.
// values of const cannot be changed.
