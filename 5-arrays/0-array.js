let list = ['orange', true, 28];

let students = ['Tony', 'Marshall', 'Ray', 'Rhys', 23, true, ['Ryan', 'Iesha', 'Amira']];

console.log(typeof students);
console.log(students instanceof Array);

// Challenge: go into the nested array, grab amirah, and say "Hellow Amira, you look nice today"

console.log(`Hello ${students[6][2]}, you look nice today`);