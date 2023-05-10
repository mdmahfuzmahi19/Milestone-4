function SumOfArray(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers. length; i++){
        const index=i;
        const element = numbers[index];
        sum= sum +element;
        // console.log(index, element, sum);
    }
    return sum;
}
// -----------------------------------------//

function getOddNumbersOfAnArray(numbers) {
    const oddnumbers =[]; 
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        // console.log(index, element);
        if (element % 2 === 1) {
            oddnumbers.push(element);
            console.log(index, element);
        }
    }
    return oddnumbers;
}

const mynumber = [12, 34 ,61 ,57, 98, 32];
const oddnumbers = getOddNumbersOfAnArray(mynumber);
console.log(oddnumbers);

const oddNumbersSum = SumOfArray(oddnumbers);
console.log(oddNumbersSum);