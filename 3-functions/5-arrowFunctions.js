// Nickname: Fat arrow functions

// function coffee() {
//     console.log("coffee is life");
// }

// let coffee = () => {
//     console.log("Coffee is life!");
// }

// let bill = total => {
//     let broke = Math.floor(total*1.06);
//     console.log(`I don't have ${broke} dollars!`);
// }

// bill(20);


// Challenge
// Create two functions - take a string parameter, and capitalize the whole string, return that string
//                        take a string as a parameter, then lowercase it, console.log result

let str = "joe";

var uppercase = (big) => {
    return big.toUpperCase();
}

var lowercase = (lower) => {
    return lower.toLowerCase();
}

console.log(lowercase(uppercase(str)));
