function Employee(employeeId, employeeName, salary, project){
    this.employeeId = employeeId;
    this.employeeName = employeeName;
    this.salary = salary;
    this.project = project;
    this.displayDetails = function(){
        console.log("Employee ID : "+this.employeeId);
        console.log("Employee Name : "+this.employeeName);
        console.log("Salary : "+this.salary);
        console.log("Project : "+this.project);
    };
}

var emp1 = new Employee(1001, "Scott", 65000, "LKM");
//emp1.displayDetails();


var emp2 = new Employee(1002, "Jack", 59000, "Insurance");
//emp2.displayDetails();

Employee.prototype.calculateVariablePay = function(){
    console.log("Variable Pay : "+(this.salary*(10/100)));
};

emp1.calculateVariablePay = function(){
    console.log("Overridden")
}

emp1.calculateVariablePay();
emp2.calculateVariablePay();

console.log(emp1);
console.log(Employee.prototype);