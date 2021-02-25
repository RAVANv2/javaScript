


s = "adfgt"

var getLetter = (s) => {

    var set1 = ["a","e","i","o","u"]
    var set2 = ["b","c","d","f","g"]
    var set3 = ["h","j","k","l","m"]
    var set4 = ["n","p","q","r","s","t","v","w","x","y","z"]

    if(set1.includes(s[0])){
        return "A"
    }
    else if(set2.includes(s[0])){
        return "B"
    }
    else if(set3.includes(s[0])){
        return "C"
    }
    else if(set4.includes(s[0])){
        return "D"
    }

}

console.log(getLetter(s))
console.log([1,2,3,4,54].includes(3))