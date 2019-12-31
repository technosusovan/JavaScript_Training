var myFun = ()=>{
    console.log("Arrow Function");
}

myFun();

var add = (num1, num2)=>(num1+num2);

var result = add(50,12);

console.log(result);

(()=>console.log("Hello"))();