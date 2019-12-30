var arr = ["Scott", "Jack", "Ram", "Jerry"];

var str = "Maddy Mohan Rohn John Jacob";

var arr2 = ["Tony", "Peter", "Sam", "Henry"];

function populate(){
    var para = document.getElementsByTagName("p")
    para[0].innerHTML = arr;
    para[1].innerHTML = arr.length;
}

function pushElement(){
    arr.push("Harry");
    alert("Push Operation Performed")
}

function popElement(){
    arr.pop();
    alert("Pop Operation Performed");
}

function shiftElement(){
    arr.shift();
    alert("Shift Operation Performed");
}

function unshiftElement(){
    arr.unshift("Tom");
    arr.unshift("Susovan");
    alert("Unshift Operation Performed");
}

function concateElement(){
    
    arr = arr.concat(arr2);
    alert("Concate Operation Performed");
}

function sortElements(){
    arr.sort();
    alert("Sort Operation Performed");
}

function splitElements(){
    arr2 = arr2.concat(str.split(" "));
    alert("Split Operation Performed");
}

function joinElements(){
    str = str.join(["Mac", "Perry"]);
    alert("Join Operation Performed");
}