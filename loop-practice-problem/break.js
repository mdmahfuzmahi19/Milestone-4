for(var i = 0; i < 20; i++){
    if (i >10) {
        break;
    }
    console.log(i);
}

var roastGiven = 0; 

while (roastGiven < 10) {
    console.log('roast plzz');
    roastGiven ++;
    if(roastGiven > 4){
        break;
    }
}

var items = ['pen', 'note book', 'paper', 'phone'] ;

for(var i =0 ; i < items.length ; i++){
    var item = items[i];
    if (item == 'paper') {
        break;
    }
    console.log(item);
}

var numbers = [18, 26, 19, 18, 67, 30, 128, 77, 30, 40, 50];

for(var i = 0; i < numbers.length; i+= 1 ){
    var number = numbers[i];
    if (number > 100) {
        break;
    }
    console.log(number);
}