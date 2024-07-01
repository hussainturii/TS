// interface Tube {
//     diameter: number
//     length: number}

//     let tube: Tube {diameter: 10, length: 12}
//     console.log(tube)

// structural typing
//to revise -> objects, object literals, stale objects, index signatures

// index signature
var x: { id: number };
//x = {id: 1, name: "hussain"} // bcs there is no other value thana id

var x1: { id: number; [a: string]: any }; //when there could be any other value
x1 = { id: 1, name: "hussain" };
x1 = { id: 2, full_name: "raza" };
// x1 = {id: 1, id: 2, name: "hussain raza"} // cannot be done as the same variable cannot have two values
x1 = { id: 1, name: "hussain", last_name: "raza" }; // bcs of index signature it can take multiple strings

console.log(x1);

// type cating
let myname: unknown = "raza";
console.log(myname); // output = raza

console.log(typeof myname); //string
myname as number; //typecast works on the same line only.
console.log(typeof myname); //string

let x2: unknown = "hello";
console.log((x2 as string).length); //working of typecasting
console.log((<string>x2).length); //another way of typecasting

// enum and array
