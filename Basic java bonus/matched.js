const numbers = [12,14,16,75,88,48,18,16,54];

// for(let i= 0 ; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for(const number of numbers ){
//     console.log(number);
// }

const products = [
    {id:1, name: 'i phone' , price:19000 },
    {id:1, name: 'walton phone' , price:19000 },
    {id:1, name: 'samsung phone' , price:19000 },
    {id:1, name: 'nokia phone' , price:19000 },
    {id:1, name: 'raget phone' , price:19000 },
    {id:1, name: 'xiami Phone' , price:19000 }
];

// for(const product of products){
//     console.log(product);
// }

function matchedProducts(products, search) {
    const matched = [];
    for(const product of products){
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'Phone');
console.log(result);