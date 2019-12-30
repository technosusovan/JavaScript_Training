var str = "Accenture, Learning and Knowledge Management, accenture digital learning";
var pos1 = str.search("accenture");
document.write("<p> Position : " + pos1 + "</p>");

var subString = str.substr(11,7);

document.write("<p> SubString : " + subString + "</p>");

var upper = str.toUpperCase();

document.write("<p> UPPERCASE : " + upper + "</p>");

var lower = str.toLowerCase();

document.write("<p> lowercase : " + lower + "</p>");