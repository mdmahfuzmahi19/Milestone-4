function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    else{
        return false;
    }
}

const myyear = isLeapYear(1996);
console.log(myyear);
const heryear = isLeapYear(1854);
console.log(heryear);


// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year, 'is a leap year');
    } else {
        console.log(year, 'is not a leap year');
    }
}

// take input
const year = checkLeapYear(2004);

const year2 = checkLeapYear(2005);