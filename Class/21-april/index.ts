// let age: number = 22;
// let nama: string = "hussain";
// let kaganama: string = "turi";

// function Myname(nama: string) {
//   console.log("Your name is " + nama + "\nAnd your surname is Raza");
// }

// Myname(nama);

// function addnames(nama: string, kaganama: string): string {
//   return nama + kaganama;
// }

// console.log(addnames(nama, " " + kaganama));

// let fruits = ["apple", "banana", "orange", "strawberry"];
// console.log(fruits)

// console.log(fruits.length)
// fruits[1] = "nuts"
// console.log(fruits)

// fruits.pop()
// // console.log(fruits.pop())
// console.log(fruits)

// fruits.push("guava")
// console.log(fruits)

// fruits.unshift("mango") // adds a value to the front of an array
// console.log(fruits)

// fruits.shift()  // removes the first element of an array
// console.log(fruits)

// fruits.splice(2,0, "almonds")
// console.log(fruits)

// console.log(fruits.slice(2,4))





// assignment (EASY)

//1
let temperature = 19

if(temperature < 20){
  console.log("it's cold!")
}
else {
  console.log("weather is fine")
}

//2
let firstName = "hussain"
let lastName = "raza"

let finalName = firstName +" " +lastName

console.log(finalName)

//3
function calculateArea (radius: number){
  let area = 3.18 * (radius*radius)
  return area;
}

console.log(calculateArea(3))

//4

let newArray = [21, 23, 16, 28, 36]
let i;
let highestTemp;
for(i=0; i<newArray.length; i++){
  if(newArray[i]>newArray[i+1]){
    highestTemp = newArray[i]
  }
  else if( newArray[i+1]>newArray[i]){
    highestTemp = newArray[i+1]
  }
}

console.log("highest temp is: " + highestTemp)


//5
// var script = prompt("enter your age:")


//6 
let Numarray = [1, 2, -3, -4, 5, -6, 7, 8]

function PositiveNum(Numarray: number[]){
  let i;
  let x = 0;
  for (i=0; i<Numarray.length; i++){
    if(Numarray[i] > 0){
      x++;
    }
  }
  return x;
}

console.log("Count of positive numbers: " + PositiveNum(Numarray))

// 7

let arraywords = ["ali", "hussain", "hassan", "asif"]
for (i=0; i<arraywords.length; i++){
  
}















