const shopingCard =[
    { name:'shoe', price: 1200, quantity: 2},
    { name:'Tshirt', price: 800, quantity: 5},
    { name:'pant', price: 500, quantity: 4},
    { name:'belt', price: 200, quantity: 3},
    { name:'watch', price: 600, quantity: 1}
]

function totalcost(products) {
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
        // console.log(product);
    }
    return sum;
}

const expense = totalcost(shopingCard);
console.log(expense);