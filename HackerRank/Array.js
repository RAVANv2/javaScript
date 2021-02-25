

array = [2, 3, 6, 6, 5]

var findSecond = (nums) => {
    var max = 0
    for(let ele of nums){if(ele>max) max=ele}

    var max2=0
    for(let ele of nums){if((ele>max2) && (ele<max)) max2 = ele}

    return max2
}
console.log(findSecond(array))