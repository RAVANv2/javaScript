
str = Number(1234)

var reverse=(s)=>{

    try {
        s = s.split('').reverse().join('')
    }
    catch (e) {
        console.log(e.message)
    }

    return s
}

console.log(reverse(str))