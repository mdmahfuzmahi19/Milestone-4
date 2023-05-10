function multiplictionOfNumber(numbers) {
    let result = 1;
    for(let i = 1; i <= numbers; i++){
        result = result * i;
    }
    return result;
}

const result = multiplictionOfNumber(7);
console.log(result);