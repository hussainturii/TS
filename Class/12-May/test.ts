import inquirer from "inquirer";
const num1 = inquirer.prompt([
    {
      type: "number",
      name: "num1",
      message: "enter ur desired number: ",
    },
  ]);