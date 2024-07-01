var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question 1: Personal Message
var nameofPerson = "Hussain";
var message = "would you like to learn some Python today?";
console.log(nameofPerson + ", " + message);
// Question 2: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "hello hussain";
// Lowercase
console.log(personName.toLowerCase());
// Uppercase
console.log(personName.toUpperCase());
// Titlecase
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
// Question 3: quote
console.log("Nietzsche said, God is dead and we have killed him.");
// Question 4: Famous Quote: 
var Author = "Friedrich Nietzsche";
var Quote = "God is dead and we have killed him.";
console.log(Quote, " Qouted by " + Author);
// Question 5 : Stripping Names
function Stripping(str) {
    return str.replace(/\s+/g, '');
}
var message2 = "hello its my code";
console.log(message2); // a
console.log(Stripping(message2)); // b
// Question 6: perform cals for number 8
console.log("by addittion : ", 5 + 3);
console.log("by subtraction : ", 10 - 2);
console.log("by multiplication : ", 4 * 2);
console.log("by division : ", 16 / 2);
//Question 7: 
// Question 8: Favorite Number
var favNumber = 7;
console.log("My Favorite number is " + favNumber);
// Question 9: Personal Message Program (a)
// This program stores a person’s name in a variable and prints a personalized message.
console.log(nameofPerson + ", " + message);
// Number Eight Program (b)
// This program performs addition, subtraction, multiplication, and division to result in the number 8.
console.log(5 + 3); // Addition
console.log(10 - 2); // Subtraction
console.log(4 * 2); // Multiplication
console.log(16 / 2); // Division
// Question 10: names in Array
var names = ["hussain", "raza", "turi"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// Question 10: names with a same message
for (var i = 0; i < names.length; i++) {
    console.log(names[i] + " is a great guy.");
}
// Question 11:  array of Fav transportation with a message
var cars = ["Mercedes", "Toyota", "BMW"];
console.log(cars[0] + " are the most comfortable cars ever.");
console.log(cars[1] + " are affordable and yet classy and comfortable");
console.log(cars[2] + " classy, expensive and charming.");
// //Questions 12: Guest List
var guestList = ["Hussain ", "Raza ", "Turi "];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. It would be an honor to have you with us."));
}
// Question 13: Guest cannot make it
/*1*/ console.log(guestList[1] + " cannot make it to our dinner, unfortunetaley.");
/*2*/ guestList[1] = "Nangeyali";
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please honor us."));
}
// // Question 14: 
console.log("\nUPDATE: We have found a new and bigger dining table to accomodate more people.\n");
console.log("New guest list includes: ");
guestList.push("Sonam Bajwa ");
guestList.unshift("Ana de armas ");
guestList.splice(3, 0, "Riley ");
console.log("\n" + guestList + "\n");
for (var _b = 0, guestList_3 = guestList; _b < guestList_3.length; _b++) {
    var guest = guestList_3[_b];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please honor us."));
}
// Question 15: 
console.log("\nWe can invite only two people for dinner.");
while (guestList.length > 2) {
    var removeguests = guestList.pop();
    console.log("Sorry ".concat(removeguests, ", we can't invite you to dinner."));
}
console.log("\nDear guests:");
for (var _c = 0, guestList_4 = guestList; _c < guestList_4.length; _c++) {
    var guest = guestList_4[_c];
    console.log("Dear ".concat(guest, ", you are invited to our dinner."));
}
guestList.pop();
guestList.pop();
console.log("\nFinal guest list (should be empty):");
console.log(guestList);
// Question 16: world tour
var countriesVisited = [" Iran ", " Afghanistan ", " Italy ", " Greece ", " Norway "];
console.log("Original order: " + countriesVisited);
console.log("\nAlphabetical order:" + __spreadArray([], countriesVisited, true).sort());
console.log("\nOriginal order (unchanged):");
console.log(countriesVisited);
console.log("\nReverse alphabetical order:");
console.log(__spreadArray([], countriesVisited, true).sort().reverse());
console.log("\nOriginal order:");
console.log(countriesVisited);
console.log("\nReversed order:");
countriesVisited.reverse();
console.log(countriesVisited);
console.log("\nReversed back to original order:");
countriesVisited.reverse();
console.log(countriesVisited);
console.log("\nSorted in alphabetical order:");
countriesVisited.sort();
console.log(countriesVisited);
// Question 17: indicating number of guests
console.log("number of people invited are ".concat(guestList.length));
// Question 18: list of things
var languages = ["pashto", "farsi", "urdu", "english", "arabi"];
console.log("\nLanguages:");
console.log(languages);
// Question 19:things in objects
var country = {
    name: "Pakistan",
    provinces: 4,
    population: "200 million",
    capital: "Islamabad",
};
console.log(country);
// Question 20: intentional error
console.log(guestList[8]); // error
console.log(guestList[3]); // correct
// Question 21: conditional tests
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car == 'Subaru'? I predict False.");
console.log(car == 'Subaru');
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');
console.log("Is car.toUpperCase() == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU');
console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);
console.log("Is car.length < 7? I predict True.");
console.log(car.length < 7);
console.log("Is car == 'Subaru' || car == 'subaru'? I predict True.");
console.log(car == 'Subaru' || car == 'subaru');
console.log("Is car == 'Toyota' && car == 'subaru'? I predict False.");
// console.log(car == 'Toyota' && car == "subaru")
// Question 22
// Question 23: Allien color
var alien_color = 'green';
if (alien_color == 'green') {
    console.log("The player just earned 5 points.");
}
alien_color = 'red'; //fails
if (alien_color == 'green') { } //no output
// Question 24: Allien color
alien_color = 'green';
if (alien_color == 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
alien_color = 'yellow';
if (alien_color == 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
// Question 25: 
alien_color = 'green';
if (alien_color == 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_color == 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_color == 'red') {
    console.log("The player earned 15 points.");
}
alien_color = 'yellow';
if (alien_color == 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_color == 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_color == 'red') {
    console.log("The player earned 15 points.");
}
alien_color = 'red';
if (alien_color == 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_color == 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_color == 'red') {
    console.log("The player earned 15 points.");
}
// Question 26: Age 
var age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else if (age >= 65) {
    console.log("The person is an elder.");
}
// Question 27: 5 statements
var favorite_fruits = ["Mango", "Apple", "Water Melon"];
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
else {
    console.log("Not included in your array.");
}
// Question 28: 
var usernames = ["admin", "Hussain", "Raza", "Turi", "Jowargar"];
for (var _d = 0, usernames_1 = usernames; _d < usernames_1.length; _d++) {
    var username = usernames_1[_d];
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
// Question 29: 
if (usernames.length == 0) {
    console.log("We need to find some users.");
}
usernames = [];
if (usernames.length == 0) {
    console.log("We need to find some users.");
}
// Question 30: 
var current_users = ["Alice", "Bob", "Charlie", "David", "Eve"];
var new_users = ["bob", "George", "charlie", "Fiona", "Helen"];
var _loop_1 = function (new_user) {
    if (current_users.some(function (user) { return user.toLowerCase() === new_user.toLowerCase(); })) {
        console.log("The username \"".concat(new_user, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("The username \"".concat(new_user, "\" is available."));
    }
};
for (var _e = 0, new_users_1 = new_users; _e < new_users_1.length; _e++) {
    var new_user = new_users_1[_e];
    _loop_1(new_user);
}
// Question 31:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _f = 0, numbers_1 = numbers; _f < numbers_1.length; _f++) {
    var number = numbers_1[_f];
    var ordinal = void 0;
    if (number === 1) {
        ordinal = "1st";
    }
    else if (number === 2) {
        ordinal = "2nd";
    }
    else if (number === 3) {
        ordinal = "3rd";
    }
    else {
        ordinal = "".concat(number, "th");
    }
    console.log(ordinal);
}
// Question 32: pizzas
var favoritePizzas = ["Pepperoni", "Tandoori", "BBQ Chicken"];
for (var _g = 0, favoritePizzas_1 = favoritePizzas; _g < favoritePizzas_1.length; _g++) {
    var pizza = favoritePizzas_1[_g];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("\nI really love pizza. it is delicious and mouth watering. I enjoy trying different kinds of pizza.");
//  Question 33: 
var animals = ["Dog", "Cat", "Rabbit"];
for (var _h = 0, animals_1 = animals; _h < animals_1.length; _h++) {
    var animal = animals_1[_h];
    console.log("A ".concat(animals, " would make a great pet."));
}
console.log("\nAny of these animals would make a great pet!");
// Question 34: printed shirts
function make_shirt(size, message) {
    console.log("The shirt size is ".concat(size, " and it will have the message: \"").concat(message, "\" printed on it."));
}
make_shirt("Medium", "Hello World!");
make_shirt("Small", "JavaScript Rocks!");
// Question 35: 
// Large Shirts
function make_shirt1(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and it will have the message: \"").concat(message, "\" printed on it."));
}
make_shirt1();
// Question 36: 
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Bayaan", "4 saal"));
console.log(make_album("Strings", "Duur"));
console.log(make_album("Atif Aslam", "Jal pari", 11));
// Question 38: 
var magicians = ["Hussain", "Raza", "Turi", "Sir Jahanzaib"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
show_magicians(magicians);
// Question 41: 
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
// Question 42:
var greatMagicians = make_great(__spreadArray([], magicians, true)); // a shallow copy
show_magicians(greatMagicians);
show_magicians(magicians);
// Question 43: 
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("-> ".concat(item));
    }
}
make_sandwich("beef", "Cheese", "Lettuce", "Tomato");
make_sandwich("Chicken", "sauce", "mushrooms");
make_sandwich("cheese Butter", "onions");
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var _b = options_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var Car = create_car("Toyota", "Camry", ["color", "blue"], ["sunroof", true]);
console.log(Car);
