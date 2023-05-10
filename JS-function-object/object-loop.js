var shopingCard = {
    books : 3,
    sunglass : 1,
    keyboard : 5,
    mouse : 1,
    pen :25,
    shoes: 2,
}
const keys = Object.keys(shopingCard);
console.log(keys);

const values = Object.values(shopingCard)
console.log(values);

for(var i = 0; i < keys.length; i++){
    var propartyName= keys[i];
    // var propartyValues = values[i];
    var propartyValues = shopingCard[propartyName]
    console.log(propartyName, propartyValues);
}

for(var propertyName in shopingCard){
    const value = shopingCard[propertyName]
    console.log(propertyName, value);
}
