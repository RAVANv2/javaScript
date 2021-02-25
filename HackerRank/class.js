


class Polygon{
    constructor(sides) {
        this.sides = sides
    }

    perimeter(){
        return this.sides.reduce((a,b) => a+b)
    }

}

var obj = new Polygon([1,2,3,4])
console.log(obj.perimeter())
