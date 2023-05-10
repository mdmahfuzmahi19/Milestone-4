function maxInArray(number) {
    let largest = number [0];
    for(let i = 0; i < number.length; i++){
        const index = i;
        const element = number[index];
        // console.log(element);
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const height = [167, 190, 120, 137, 167, 199];
const tallest = maxInArray(height);
console.log(tallest);