var emp = {
    empid : 112235,
    empname : "Rohit",
    project : "LKM",
    display : function(){
        console.log("Employee Name : " + this.empname);
        console.log("Project Name : " + this.project);
        console.log(emp)
    }
};

emp.display();