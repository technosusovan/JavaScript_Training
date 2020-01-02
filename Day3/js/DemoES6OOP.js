class shape {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
    }

    move() {
        console.log(`Moving shape with ${this.id} with ${this.x} and ${this.y} coordinates`);
    }
}

let s = new shape(101, 5, 10);
s.move();

console.log(typeof(shape.constructor))