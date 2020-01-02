var emp1 = {
    empId: 1001,
    empName: "Scott",
    project: "LKM"
};

// Destructing object emp1
let {empId: id, empName: name, project: p} = emp1;

console.log(`ID : ${id}`);
console.log(`Name : ${name}`);
console.log(`Project : ${p}`);

// Destructoring Array
let days = ["Monday", "Tuesday", "Wednesday", "Thrusday"];
let [first, second, , fourth] = days;
console.log(first);
console.log(fourth);
console.log(second);

for( const [index, element] of days.entries()) {
    console.log(`${index} ${element}`)
}