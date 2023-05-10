const song = 'tumi bhondu kala paki. ami jano ki. boshontoka le bulte pari ki. sada sada kala kala. rong gimece sada kala.';

const parts = song.split(' ')
const sentence = song.split('.')
const chars = song.split('')
// console.log(chars);

const slice = song.slice(5, 8);
console.log(slice);
const slice2 = song.substring(5, 8)
console.log(slice2);

const newSongLine = [
    'tumi bhondu kala paki',
    'ami jano ki',
    'boshontoka le bulte pari ki',
    'sada sada kala kala',
    'rong gimece sada kala',
    ''
  ]
const newSong = newSongLine.join('.')
console.log(newSong);