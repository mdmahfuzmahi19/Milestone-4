var numbers = [18, 26, 19, 18, 67, 30, 128, 77, 30, 40, 50];

for(var i = 0; i < numbers.length; i+= 1 ){
    var number = numbers[i];
    if (number > 50) {
        continue;
    }
    console.log(number);
}
