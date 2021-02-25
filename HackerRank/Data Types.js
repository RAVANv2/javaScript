const first = 12;
const second = 4.32;
const third = "is the best place to learn and practice coding!";


function performOperation(first, second, third) {
    const firstInt = first;
    const secondDec = second;
    const thirdStr = third;

    console.log(firstInt + parseInt(firstInt));
    console.log(secondDec + +(secondDec));
    console.log("Hackerrank " + thirdStr);

}

performOperation(first,second,third);