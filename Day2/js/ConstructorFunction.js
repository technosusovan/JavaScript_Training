function Employee(employeeId, employeeName, project){
    this.employeeId = employeeId;
    this.employeeName - employeeName;
    this.project = project;
    this.displayDetails = function(){
        console.log("Employee ID : "+this.employeeId);
        console.log("Employee ID : "+this.employeeName);
        console.log("Employee ID : "+this.project);
    };
}

var emp1 = new Employee(1001, "Scott", "LKM");
emp1.displayDetails();

var emp2 = new Employee(1002, "Jack", "Insurance");
emp2.displayDetails();