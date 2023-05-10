const cameras = [
    {name:'Iphone', camera:64, storage:'128 GB', ram: 8, price: 80000, color:'black'},
    {name:'sumsung', camera:70, storage:'128 GB', ram: 8, price: 40000, color:'black'},
    {name:'oppo', camera:22, storage:'128 GB', ram: 8, price: 18000, color:'black'},
    {name:'walton', camera:14, storage:'128 GB', ram: 8, price: 8000, color:'black'},
    {name:'redmis', camera:30, storage:'128 GB', ram: 8, price: 50000, color:'black'},
]

function cheaperCamera(cameras) {
    let cheaper = cameras[0];
    for(i = 0; i < cameras.length; i++){
        const camera = cameras[i];
        if (camera.camera < cheaper.camera) {
            cheaper = camera;
        }
    }
    return cheaper;
}
const mySection = cheaperCamera(cameras);
console.log(mySection);