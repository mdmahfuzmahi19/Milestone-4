function getAverage(assingment1, assingment2, assingment3) {
    const total = assingment1 + assingment2 + assingment3;
    const average =total / 3;
    return average;
}

const assingment1Mark = 28;
const assingment2Mark = 27;
const assingment3Mark = 26;

var myAverage = getAverage(assingment1Mark, assingment2Mark, assingment3Mark);
console.log(myAverage);