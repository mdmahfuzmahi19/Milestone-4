const userName = 'jessePinkMan';
const userInput = 'jessePinKMan';

console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());

if (userName.toLowerCase() === userInput.toLowerCase()) {
    console.log('valid user');
}
else{
    console.log('invalid user');
}