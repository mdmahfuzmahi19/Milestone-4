// tuf way to find feet
const dadainch = 144;
const dadafeet = dadainch / 12;
console.log(dadafeet);

// inchToFeet in function //
function inchToFeet(inch) {
    const feet = inch / 12;
    return feet; 
}

const dadiInch = 72;
const dadifeet = inchToFeet(dadiInch);
console.log(dadifeet);

const nanuInch = 168;
const nanuFeet = inchToFeet(nanuInch);
console.log('nanu tumar hight koto',nanuFeet);