// export: kesi dosri file mein value chahie to yahan se export kartay hain.
//import: wahan import karke usko use kiya jaskta hai

let a = 5;
console.log("A=", a);

let b = 4;
const c = 7;

export default a; //thats how to export it in the same package.
// {import a from "./nameOfthatClass"}

// export default b;  cannot be done as a module can export only one entity.

export { a, b, c }; // it will export all of them.
//import {a, b, c} from "./nameOfthatClass"

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  {
    type: "number",
    name: "num1",
    message: "enter ur desired number: ",
  },
]);
