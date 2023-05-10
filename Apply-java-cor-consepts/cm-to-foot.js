function cmToFeet(cm) {
    const feet = cm/30.48;
    return feet;
}

const tableCm = 120 ;
const tableFeet = cmToFeet(tableCm);
console.log(tableFeet);