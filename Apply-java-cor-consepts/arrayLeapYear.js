function leapYear(years) {
    const leapYear= [];
    const notLeapYear= [];
    for(let i=0; i < years.length; i++){
        const index = i;
        const element = years[index];
        // console.log(index, element);
        if (element % 4 === 0 ) {
            leapYear.push(element);
            console.log('is a leap year ', element);
        }
    }
    return leapYear;
}

const years = [2023, 2024, 2025, 2028, 2030];
const leap = leapYear(years);
console.log('This array is leap year :',leap);