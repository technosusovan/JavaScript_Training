var empObj = {
    empId : 1001,
    empName : "Scott",
    display : function(){
        console.log("ID : " + this.empId);
        console.log("Name : " + this.empName);
    }
};


empObj.fun = function(){
    this.empId = 2*this.empId;
};

empObj.fun();
empObj.display();