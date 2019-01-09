// ifElse statements

// let isOn = false;

// function doTheThing() {
//     if (isOn === true) {
//         console.log("The thing is on!");
//     } else {
//         console.log("The thing is off!");
//     }
// }

// doTheThing();

// =========

// let name = "jake";

// // if (name === "Jake") {
// //     console.log("Hello, my name is Jake");
// // } else {
// //     console.log("Hello, what is your name?");
// // }

// // Challenge: capitalize the first letter of name only

// let uppercaseLetter = name.charAt(0).toUpperCase();
// let restWord = name.substring(1);
// console.log(uppercaseLetter + restWord);

// USING CONDITIONALS
// let str = 'SebAstian'
// if (str[0] === str[0].toUpperCase()) {
//   let firstLetter = str[0] + str.slice(1).toLowerCase()
//   console.log(firstLetter)
// } else {
//   let otherLetters = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
//   console.log(otherLetters)
// }
// let newStr = `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`
// console.log(newStr)

// =============

// Challenege: x<18, vote, 21 drink, 25 rent a car

let age = 26;

if (age < 18) {
    console.log("Sorry, you can't do anything.");
} else if (age <= 18 && age < 21) {
    console.log("Yay! You can vote.");
} else if (age <= 21 &&  age < 25) {
    console.log("You're old enough to drink.");
} else {
    console.log("You're old enough to rent a car.");
}