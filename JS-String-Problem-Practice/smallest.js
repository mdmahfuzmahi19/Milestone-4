function smallest(number) {
    let smaller = number [0];
    for(let i = 0; i < number.length; i++){
        // console.log(i);
        const index = i ; 
        const element = number [index];
        // console.log(element);
        if (element < smaller) {
            smaller = element;
        }
    }
    return smaller;
}

const low = [21,23,11,45,46,68,89,08,78,67,];
const small = smallest(low);
console.log('this is the smallest number :',small);