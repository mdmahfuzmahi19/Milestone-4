function reverseString (text) {
    let reversed = '';
    for(i = text.length-1; i >= 0; i--){
        const element = text[i];
        reversed = reversed + element;
        console.log(element, reversed);
    }
    return reversed;
}

const mytext = 'hello my dear friend';
const reversed  = reverseString(mytext)
console.log('out put:', reversed);