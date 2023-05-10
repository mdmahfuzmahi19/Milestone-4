// 3 to the power of 8
const result = Math.pow(3, 8);
console.log(result);

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
// console.log(gap);
if (gap < 5) {
    console.log('just friend');
}
else {
    console.log('you guys do not be a friend ');
}

const number = 2.4;
const fullNumber = Math.round(number);
// console.log(fullNumber);

const fullNumber1 = Math.ceil(5.32)
console.log(fullNumber1);

const fullNumber3 = Math.floor(2.999)
console.log(fullNumber3);

// ---------------------
// console.log(Math.random());
// const random = Math.random()*100;
// const random = Math.round(Math.random()*100);
// console.log(random);

for (let i = 0; i < 20; i++) {
    const random = Math.round(Math.random() * 6);
    console.log(random);
}