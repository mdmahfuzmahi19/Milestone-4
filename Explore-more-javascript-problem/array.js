const country = 'bangladesh';
const age = 53;
const isIndependent = true;
const student = {name: 'mahi', id:234554329 };
const friend = [12,34,56,67,78,78,45];
function add(num1,num2,) {
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friend));
console.log(typeof add);

// ---------------
console.log(friend.includes(34));
console.log(friend.includes(67));

// concat
const newFriend = [45,65,623,56,7,5,645,]
const allFriend = newFriend.concat(friend);
console.log(allFriend);