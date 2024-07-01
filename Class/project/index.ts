// function greetings(name: string, age: number): string {
//   return `hello, my name is, ${name}, aged: ${age}`;
//   // return ("hello , " +name)
// }

// console.log(greetings("Ali", 18));

function add(num1: number, num2: number): number {
  return num1 + num2;
}

function subtraction(num1: number, num2: number): number {
  return num1 - num2;
}

function division(num1: number, num2: number): number {
  return num1 / num2;
}

function mulitiplication(num1: number, num2: number): number {
  return num1 * num2;
}

function cals(num1: number, num2: number, operator: string) {

  switch (operator) {
    case "+":
      console.log(add(num1, num2));
      break;
    case "-":
      console.log(subtraction(num1, num2));
      break;
    case "/":
      console.log(division(num1, num2));
      break;
    case "*":
      console.log(mulitiplication(num1, num2));
      break;

    default:
      console.log("not correct");
  }
}

cals(2, 3, "+");
cals(2, 3, "-");
cals(2, 3, "*");











