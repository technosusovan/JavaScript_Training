var globalVar = "Global Var";

function myFun() {
    let localVar = "Local Var";
    const constVar = 10;
    console.log(`${localVar} --- ${globalVar} --- ${constVar}`);
    // Cannot reassign value to a constant variable
    // constVar = 20;
}

myFun();