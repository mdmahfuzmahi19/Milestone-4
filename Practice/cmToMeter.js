function cmToMeter(cm) {
    const meter = cm / 100;
    return meter;
}

const number = 150;
const cmNumber = cmToMeter(number);
console.log(cmNumber);