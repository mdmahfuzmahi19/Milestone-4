var myComputer= {
    brand: 'hp',
    price: 760000,
    color: 'green',
    prosesor:'i5'
}

console.log(myComputer.prosesor);
myComputer.prosesor ='i7';
console.log(myComputer);

var phone ={
    brand: 'apple',
    model: 'se',
    ram:4,
    spaice:32,
    camara: '32mp'
}


var ramValues = phone.ram;
console.log(ramValues);

var ramValues2 = phone['ram']
console.log(ramValues2);

console.log(phone);
console.log(phone.model);

phone.model = 'XR';
phone['model'] = '13 pro max'; 
console.log(phone);