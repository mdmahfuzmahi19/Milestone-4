// This is for number-push
var number = [45, 50, 55, 60, 65, 70];
number.push(75, 80);
console.log(number);

// This is for string-push
var nameOfGreatScholar = ['ibn sina', 'jabir ibne hitam ', 'al khayarijam ', 'kalid bin wilid']
nameOfGreatScholar.push('omor-ra', 'osman-ra')
console.log(nameOfGreatScholar);

// pop
var element = number.pop(80);
console.log(element);

// added an element in beginng
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
console.log(fruits);
    //number   
var num =[1, 2, 3, 4]
num.unshift(0)
console.log(num);


// remove the first element 
var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.shift();
console.log(fruits1);
    // number
var num1 = [5,6,7,8]
num1.shift()
console.log(num1);