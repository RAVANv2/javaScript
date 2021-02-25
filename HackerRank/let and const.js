// adding element to the set
var set1 = new Set()

set1.add({Firstname: "Sumit", Lastname: "Ghosh"});
set1.add(50);
set1.add(30);
set1.add(40);
set1.add("Geeks");
set1.add("GFG");

var addOne = (key,value) => {
    console.log(key+"+" +value)
}

set1.forEach(addOne)