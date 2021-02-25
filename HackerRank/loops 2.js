str = "javascriptloops"


var vowelsAndConsonants = (str) => {
    var vowel = ["a", "e", "i", "o", "u"];

    for(let v of str){
        if(vowel.includes(v)){
            console.log(v)
        }
    }
    for(let v of str){
        if(!vowel.includes(v)){
            console.log(v)
        }
    }
}


vowelsAndConsonants(str);