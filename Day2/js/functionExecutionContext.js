var country = "India";
var myCompany = function(){
    var compName = 'Accenture';
    var myLocation = function(loc){
        console.log(loc + " --- " + country);
    }
    return myLocation;
};

myCompany();

console.log(myCompany);