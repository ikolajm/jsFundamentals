let long = [1,2,3,4,5,6,7,8,9];

console.log(long.length);

// Challenge
let array = false;
let flip = arr => {
    if (arr instanceof Array) {
        array = true;
    }
    if (array === true) {
        console.log(arr.reverse());
    }
}

flip(long);