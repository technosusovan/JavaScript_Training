var x = 10; // global variable

function func1(){
    var y = 20;
    window.z = 30;
    document.write("<p>")
    document.write("<br>In func1()")
    document.write("<br> x : "+x)
    document.write("<br> y : "+y)
    document.write("<br> z : "+z)
    document.write("</p>")
}

function func2(){
    document.write("<p>")
    document.write("<br>In func2()")
    document.write("<br> x : "+x)
   // document.write("<br> y : "+y)
    document.write("<br> z : "+z)
    document.write("</p>")
}

func1();
func2();