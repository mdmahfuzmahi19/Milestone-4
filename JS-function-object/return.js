function add(number1, number2) {
    console.log(number1, number2);
    var sum = number1 + number2;
    // console.log(sum);
    return sum;
}

// add(45, 15)

var total = add(80, 20)
console.log('total', total)

function bringApple(money){
    var applePrice = 30;
    var quantity = money / applePrice;
    return quantity;
}
var taka =300;
var apples = bringApple(taka)
console.log('so many apple', apples);