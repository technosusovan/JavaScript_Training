let names = ["Scott", "Jack", "Ram", "Jerry", "Mary"];
let updatedNames = ["Jacob", "Martin", ...names]

console.log(updatedNames.length);
console.log(updatedNames);

let max = Math.max(52, -69, 32, 54, 8);
console.log(max);

max = Math.max(52, ...[-69, 32], 54, 8);
console.log(max);