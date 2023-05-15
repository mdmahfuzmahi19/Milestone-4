let numbers = [19, 38, 58, 756, 100, 235, 857, 68, -96, 756, 999];

for(let i= 0; i < numbers.length; i++){
    let number = numbers[i];
    if (number < -1) {
        break ;
    }
    console.log(number);
}

let myNames = ['mahi', 'numan', 'mydul','zakir','kalid bin walid'];

for(let i=0 ; i < myNames.length; i++){
    let myName = myNames[i];
    if (myName === 'kalid bin walid'){
        break;
    }
    console.log(myName);
}
for (let i = 0; i<15; i++){
    if(i > 10){
        break;
    }
    console.log(i);
}