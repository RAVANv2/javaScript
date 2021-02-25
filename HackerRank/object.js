a = 4
b = 5


var rectangle = (a,b) => {
    ans = {}

    ans.length = a
    ans.width = b
    ans.perimeter = 2*(a+b)
    ans.area = a*b

    return ans
}
var obj = rectangle(a,b)

for(let i in obj){
    console.log(i)
}