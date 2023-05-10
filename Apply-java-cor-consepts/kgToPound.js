function kgToPound(kg){
    const pound = kg * 2.20462
    return pound;
}
const cakekg= 5;
const cakepound= kgToPound(cakekg);
console.log(cakepound);