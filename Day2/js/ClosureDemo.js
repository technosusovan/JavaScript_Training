function compute(){
    var x = 10;
    function display(){
        x++;
        console.log("Log : " + x);
    }
    return display;
}

//console.log(compute);
var f1 = compute();
f1();
f1();
f1();
f1();