"use strict";
// export: kesi dosri file mein value chahie to yahan se export kartay hain.
//import: wahan import karke usko use kiya jaskta hai
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.c = exports.b = exports.a = void 0;
let a = 5;
exports.a = a;
console.log("A=", a);
let b = 4;
exports.b = b;
const c = 7;
exports.c = c;
exports.default = a; //thats how to export it in the same package.
//import {a, b, c} from "./nameOfthatClass"
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    {
        type: "number",
        name: "num1",
        message: "enter ur desired number: ",
    },
]);
