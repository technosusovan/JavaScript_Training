    // Normal function
function showMsg(){
    document.write("<p>Hello!!<p>");
}

showMsg();

    // Assigning function to a variable
var greeting = function showMsg(){
    document.write("<p>Hello!!<p>");
}

greeting();
document.write(typeof(greeting));

    // Anonymous function
var greeting = function() {
    document.write("<p>Hello!!<p>");
}

greeting();
document.write(typeof(greeting));

