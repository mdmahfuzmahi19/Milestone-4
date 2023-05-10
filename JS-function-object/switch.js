const color = 'yellow';
if (color === 'green') {
    console.log('say hello to green');
}
else if (color === 'red') {
    console.log('say hello to my red friend');
}
else if (color === "yellow") {
    console.log('say hello to my another friend yellow');
}
else{
    console.log('you are nothing but my favarit color');
}

// switch

switch (color) {
    case 'green':
        console.log('hello my dear green'); 
        break;
    case 'blue':
        console.log('hello blue,how are you');
        break;
        ;
    case 'white':
        console.log('you are the most brighter then any color, white');
        break;
        ;
    case 'red':
        console.log('people think you are the simble of danger, red');
        break;
        ;
    case 'yellow':
        console.log('scientics says when people see yellow color, people feel hungry');    
        break;
        ;
    default:
        console.log('you are a kala kala friend');
        ;
}