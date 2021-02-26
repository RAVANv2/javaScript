

var increaseCount = () => {
    var count = +(document.getElementById("btn").innerHTML);

    count += 1

    document.getElementById("btn").innerHTML = count.toString()
}