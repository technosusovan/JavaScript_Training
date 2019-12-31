function Person(){
    this.walk = function(){
        console.log("Walking");
    }
}

Person.prototype.greet = function(){
    console.log("Hello!!!");
}

function Employee(){}

//Inheritance
Employee.prototype = new Person();

var emp1 = new Employee();
emp1.walk();
emp1.greet();
console.log(emp1);

console.log("Checking Inheritance : " + (emp1 instanceof Person));