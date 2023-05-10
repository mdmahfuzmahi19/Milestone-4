const phones = [
    {name:'Iphone', camera:64, storage:'128 GB', ram: 8, price: 80000, color:'black'},
    {name:'sumsung', camera:70, storage:'128 GB', ram: 8, price: 40000, color:'black'},
    {name:'oppo', camera:22, storage:'128 GB', ram: 8, price: 18000, color:'black'},
    {name:'walton', camera:14, storage:'128 GB', ram: 8, price: 8000, color:'black'},
    {name:'redmis', camera:30, storage:'128 GB', ram: 8, price: 50000, color:'black'},
]

function highCameras(phones) {
    let cameraGood = phones[0]; 
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if (phone.camera > cameraGood.camera ) {
            cameraGood = phone;
        }
    }
    return cameraGood;
}

const myPhones= highCameras(phones);
console.log(myPhones);