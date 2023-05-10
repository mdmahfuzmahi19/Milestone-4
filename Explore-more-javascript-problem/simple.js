const shopingCard =[
    { name:'shoe', price: 1200},
    { name:'Tshirt', price: 800},
    { name:'pant', price: 500},
    { name:'belt', price: 200},
    { name:'watch', price: 600}
]

function totalcost(products) {
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price;
        // console.log(product);
    }
    return sum;
}

const expense = totalcost(shopingCard);
console.log(expense);