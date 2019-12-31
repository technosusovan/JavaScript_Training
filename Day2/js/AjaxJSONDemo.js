function sendRequest(){
    //1. Create XHttpRequest object
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var content = document.getElementById("content");
            var jsonObj = JSON.parse(this.responseJSON);
            content.innerHTML = jsonObj;
        }
    }

    xmlhttp.open("GET", "emp.json", true);
    xmlhttp.send();
}