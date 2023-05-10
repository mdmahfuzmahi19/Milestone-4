function factorial(number) {
    let i = number;
    let result = 1;
    while (number <= 7) {
        result = result * number;
        number ++;
        console.log(result);
    }
    return result;
}

const number = factorial(1);
console.log(number);

// factorial with reverse way in while

// function factorial(number) {
//     let i = number;
//     let result = 1;
//     while (i >= 1) {
//         result = result  * i;
//         console.log(i);
//         i--;
//     }
//     return result ; 
// }

// const number  = 7; 
// const fact = factorial(number);
// console.log('factorial of 7 :', number, fact);