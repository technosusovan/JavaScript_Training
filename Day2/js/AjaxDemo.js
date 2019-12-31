function sendRequest(){
    //1. Create XHttpRequest object
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var content = document.getElementById("content");
            content.innerHTML = xmlhttp.responseText;
        }
    }

    xmlhttp.open("GET", "emp.js", true);
    xmlhttp.send();
}