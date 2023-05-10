const song = 'tumi bhondu kala paki ami jano ki boshontoka le bulte pari ki, sada sada kala kala rong gimece sada kala';

const scarchItems = 'Tumi'; 
// const doseExist = song.includes(scarchItems);
const songLowerCase = song.toLowerCase();
const scarchItemsLowerCase = scarchItems.toLowerCase()

const doseExist = songLowerCase.includes(scarchItemsLowerCase);
console.log(doseExist);

const doseExistOneLine = song.toLowerCase().includes(scarchItems.toLowerCase());
console.log(doseExistOneLine);

// Some Time you need to use 'index of' to find some think
console.log(song.indexOf('kala'));

if (song.indexOf('sasa') !== -1) {
    console.log('its exsit inside of this string');
}
else{
    console.log('it Does not exist in this string');
}

// to Find What Sentence Start with
console.log(song.startsWith('tumi'));

// to Find What End With
const fileName = 'programing.js'
console.log(fileName.endsWith('.js'));