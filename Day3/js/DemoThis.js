function myFun() {
    console.log(this);
}

myFun();

let bar = {
    foo: function(){
        console.log(this);
    }
};

bar.foo();