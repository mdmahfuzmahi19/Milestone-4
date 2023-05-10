function reversedWord(text) {
    const word = text.split(' ');
    const output = [];
    for(let i = word.length - 1; i >= 0; i--){
        const element = word[i];
        output.push(element);
    }
    const reversed = output.join(' ');
    return reversed;
}

const mytext = 'yo yo do you need anything';
const yo = reversedWord(mytext);
console.log(yo);