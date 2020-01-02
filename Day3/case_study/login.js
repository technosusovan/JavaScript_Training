function validateForm() {
    var x = document.forms["myForm"]["username"].value;
    var y = document.forms["myForm"]["password"].value;
    if (x == "" && y == "") {
       text = "Username and password are mandatory";
    }
      else if (x == "Rohit" && y == "12345"){
        setTimeout(function() {window.location = "/Day3/home.html" });
    } else {
        text = "Please check your username and password";
    }
    document.getElementById("errMsg").innerHTML = text;
    return false;
  } 