document.write("<p>");

var arr = new Array(3);
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;

console.log(arr);

document.write(typeof(arr));

var date1 = new Date();
document.write("<br> date1 : "+date1);

var date2 = new Date("2019 30 December");
document.write("<br> date2 : "+date2);

var date3 = new Date("30 2019 December");
document.write("<br> date3 : "+date3);

//----------------------------------------------//

var emp1 = {
    empId:1001,
    empName:"Scott",
};
console.log(emp1);

var emp2 = new Object();

emp2.empId = 1002,
emp2.empName = "Jack",
console.log(emp2);

document.write("<p>");
