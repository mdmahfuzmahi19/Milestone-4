console.log(6/2);
console.log(9/2);
// -----
console.log(6%2);
console.log(9%2);

function isOddOrEven(number) {
    const remainder = number % 2;
    if (remainder == 0) {
        return true;
    }
    else{
        return false;
    }
}
const mynumber = isOddOrEven(10);
console.log(mynumber);
const hernumber = isOddOrEven(15);
console.log(hernumber);