function milesToKilometar(miles) {
    const kilometar = miles * 1.60934;
    return kilometar;
}

const sylToDha_miles = 250;
const sylToDha_kilometar= milesToKilometar(sylToDha_miles);
console.log('Kilometar =',sylToDha_kilometar);