

class Rectangle{

    constructor(w,h) {
        this.w = w
        this.h = h
    }
}

Rectangle.prototype.area = function () {
    return this.w * this.h
}

class Square extends Rectangle{

    constructor(w,h) {
        super(w,h);
    }
}

obj = new Square(4,5)
console.log(obj.area())