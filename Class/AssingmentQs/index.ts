// Question 1: Personal Message
let nameofPerson: string = "Hussain";
let message: string = "would you like to learn some Python today?"
console.log(nameofPerson +", "+ message);

// Question 2: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName: string = "hello hussain";

// Lowercase
console.log(personName.toLowerCase());

// Uppercase
console.log(personName.toUpperCase());

// Titlecase
console.log(personName.replace(/\b\w/g, char => char.toUpperCase()));


// Question 3: quote
console.log("Nietzsche said, God is dead and we have killed him.")


// Question 4: Famous Quote: 
var Author = "Friedrich Nietzsche"
var Quote = "God is dead and we have killed him."
console.log(Quote, " Qouted by "+ Author);


// Question 5 : Stripping Names
function Stripping (str: string): string {
    return str.replace(/\s+/g, '');
}
const message2 = "hello its my code";
console.log(message2) // a
console.log(Stripping(message2)) // b

// Question 6: perform cals for number 8
console.log("by addittion : ", 5 + 3)
console.log("by subtraction : ", 10 - 2)
console.log("by multiplication : ", 4 * 2)
console.log("by division : ", 16 / 2)

//Question 7: 

// Question 8: Favorite Number
let favNumber: number = 7;
console.log("My Favorite number is " + favNumber);

// Question 9: Personal Message Program (a)
// This program stores a person’s name in a variable and prints a personalized message.
console.log(nameofPerson +", "+ message);

// Number Eight Program (b)
// This program performs addition, subtraction, multiplication, and division to result in the number 8.
console.log(5 + 3); // Addition
console.log(10 - 2); // Subtraction
console.log(4 * 2); // Multiplication
console.log(16 / 2); // Division

// Question 10: names in Array
let names = ["hussain", "raza", "turi"]
for (let i=0; i<names.length; i++)
    {
        console.log(names[i])
    }


// Question 10: names with a same message
for (let i=0; i<names.length; i++)
    {
        console.log(names[i] + " is a great guy.")
    }


// Question 11:  array of Fav transportation with a message
let cars = ["Mercedes", "Toyota", "BMW"]
console.log(cars[0] + " are the most comfortable cars ever.")
console.log(cars[1] + " are affordable and yet classy and comfortable")
console.log(cars[2] + " classy, expensive and charming.")

// //Questions 12: Guest List
let guestList: string[] = ["Hussain ", "Raza ", "Turi "];

for (let guest of guestList) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. It would be an honor to have you with us.`);
}


// Question 13: Guest cannot make it
/*1*/ console.log(guestList[1] + " cannot make it to our dinner, unfortunetaley.")
/*2*/ guestList[1] = "Nangeyali"
for (let guest of guestList){
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please honor us.`)
}


// // Question 14: 
console.log ("\nUPDATE: We have found a new and bigger dining table to accomodate more people.\n")
console.log("New guest list includes: ")

guestList.push("Sonam Bajwa ")
guestList.unshift("Ana de armas ")
guestList.splice(3, 0, "Riley ")
console.log("\n" + guestList+ "\n")
for (let guest of guestList){
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please honor us.`)
}

// Question 15: 
console.log("\nWe can invite only two people for dinner.");

while (guestList.length > 2) {
    let removeguests = guestList.pop();
    console.log(`Sorry ${removeguests}, we can't invite you to dinner.`);
}

console.log("\nDear guests:");
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are invited to our dinner.`);
}

guestList.pop();
guestList.pop();

console.log("\nFinal guest list (should be empty):");
console.log(guestList);


// Question 16: world tour
let countriesVisited = [" Iran ", " Afghanistan ", " Italy ", " Greece ", " Norway "];

console.log("Original order: " + countriesVisited)


console.log("\nAlphabetical order:" + [...countriesVisited].sort());

console.log("\nOriginal order (unchanged):");
console.log(countriesVisited);

console.log("\nReverse alphabetical order:");
console.log([...countriesVisited].sort().reverse())

console.log("\nOriginal order:")
console.log(countriesVisited)

console.log("\nReversed order:")
countriesVisited.reverse()
console.log(countriesVisited)

console.log("\nReversed back to original order:");
countriesVisited.reverse();
console.log(countriesVisited);

console.log("\nSorted in alphabetical order:")
countriesVisited.sort();
console.log(countriesVisited);

// Question 17: indicating number of guests

console.log(`number of people invited are ${guestList.length}`)

// Question 18: list of things
let languages = ["pashto", "farsi", "urdu", "english", "arabi"];
console.log("\nLanguages:");
console.log(languages);

// Question 19:things in objects
let country = {
    name : "Pakistan",
    provinces : 4,
    population: "200 million", 
    capital: "Islamabad", 
}
console.log(country)

// Question 20: intentional error
console.log(guestList[8]) // error
console.log(guestList[3]) // correct

// Question 21: conditional tests
let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'Subaru'? I predict False.");
console.log(car == 'Subaru');

console.log("Is car != 'toyota'? I predict True.")
console.log(car != 'toyota');

console.log("Is car != 'subaru'? I predict False.")
console.log(car != 'subaru')

console.log("Is car.toLowerCase() == 'subaru'? I predict True.")
console.log(car.toLowerCase() == 'subaru')

console.log("Is car.toUpperCase() == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU')

console.log("Is car.length > 5? I predict False.")
console.log(car.length > 5)

console.log("Is car.length < 7? I predict True.")
console.log(car.length < 7)

console.log("Is car == 'Subaru' || car == 'subaru'? I predict True.");
console.log(car == 'Subaru' || car == 'subaru')

console.log("Is car == 'Toyota' && car == 'subaru'? I predict False.");
// console.log(car == 'Toyota' && car == "subaru")

// Question 22
// Question 23: Allien color
let alien_color = 'green';
if (alien_color == 'green') {
    console.log("The player just earned 5 points.");
}

alien_color = 'red'; //fails
if (alien_color == 'green'){} //no output

// Question 24: Allien color
alien_color = 'green';

if (alien_color == 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

alien_color = 'yellow';

if (alien_color == 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}


// Question 25: 
alien_color = 'green';

if (alien_color == 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color == 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color == 'red') {
    console.log("The player earned 15 points.");
}

alien_color = 'yellow';

if (alien_color == 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color == 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color == 'red') {
    console.log("The player earned 15 points.");
}

alien_color = 'red';

if (alien_color == 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color == 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color == 'red') {
    console.log("The player earned 15 points.");
}


// Question 26: Age 
let age = 25;
if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else if (age >= 65) {
    console.log("The person is an elder.");
}

// Question 27: 5 statements
let favorite_fruits = ["Mango", "Apple", "Water Melon"];

if (favorite_fruits.includes("Mango")) {
    console.log("You really like Mango!");
}

if (favorite_fruits.includes("Apple")) {
    console.log("You really like Apple!");
}

if (favorite_fruits.includes("Water Melon")) {
    console.log("You really like Water Melon!");
}

if (favorite_fruits.includes("Orange")) {
    console.log("You really like Orange!");
}

if (favorite_fruits.includes("Grapes")) {
    console.log("You really like Grapes!");
}
else{
    console.log("Not included in your array.")
}

// Question 28: 
let usernames: string[] = ["admin", "Hussain", "Raza", "Turi", "Jowargar"];

for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

// Question 29: 
if (usernames.length == 0){
    console.log("We need to find some users.")
}

usernames = []
if (usernames.length == 0){
    console.log("We need to find some users.")
}

// Question 30: 
let current_users: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
let new_users: string[] = ["bob", "George", "charlie", "Fiona", "Helen"];

for (let new_user of new_users) {
    if (current_users.some(user => user.toLowerCase() === new_user.toLowerCase())) {
        console.log(`The username "${new_user}" is already taken. Please enter a new username.`);
    } else {
        console.log(`The username "${new_user}" is available.`);
    }
}

// Question 31:
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    let ordinal: string;

    if (number === 1) {
        ordinal = "1st";
    } else if (number === 2) {
        ordinal = "2nd";
    } else if (number === 3) {
        ordinal = "3rd";
    } else {
        ordinal = `${number}th`;
    }

    console.log(ordinal);
}

// Question 32: pizzas
let favoritePizzas: string[] = ["Pepperoni", "Tandoori", "BBQ Chicken"];

for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("\nI really love pizza. it is delicious and mouth watering. I enjoy trying different kinds of pizza.");


//  Question 33: 
let animals = ["Dog", "Cat", "Rabbit"];

for (let animal of animals) {
    console.log(`A ${animals} would make a great pet.`);
}
console.log("\nAny of these animals would make a great pet!");


// Question 34: printed shirts
function make_shirt(size: string, message: string) {
    console.log(`The shirt size is ${size} and it will have the message: "${message}" printed on it.`);
}

make_shirt("Medium", "Hello World!");
make_shirt("Small", "JavaScript Rocks!");


// Question 35: 
// Large Shirts
function make_shirt1(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`The shirt size is ${size} and it will have the message: "${message}" printed on it.`);
}
make_shirt1()


// Question 36: 
function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");


// Question 37: 
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

console.log(make_album("Bayaan", "4 saal"));
console.log(make_album("Strings", "Duur"));
console.log(make_album("Atif Aslam", "Jal pari", 11));


// Question 38: 
let magicians: string[] = ["Hussain", "Raza", "Turi", "Sir Jahanzaib"];

function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

show_magicians(magicians);


// Question 41: 
function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = []
    for (let magician of magicians) {
        greatMagicians.push(`the Great ${magician}`)
    }
    return greatMagicians
}

// Question 42:
let greatMagicians = make_great([...magicians]) // a shallow copy
show_magicians(greatMagicians)

show_magicians(magicians)


// Question 43: 
function make_sandwich(...items: string[]) {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log(`-> ${item}`);
    }
}

make_sandwich("beef", "Cheese", "Lettuce", "Tomato");
make_sandwich("Chicken", "sauce", "mushrooms");
make_sandwich("cheese Butter", "onions");

//question 44:
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function create_car(manufacturer: string, model: string, ...options: [string, any][]): Car {
    let car: Car = { manufacturer, model };
    for (let [key, value] of options) {
        car[key] = value;
    }
    return car;
}

let Car = create_car("Toyota", "Camry", ["color", "blue"], ["sunroof", true]);
console.log(Car);














