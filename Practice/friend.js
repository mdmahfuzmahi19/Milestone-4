const friend = ['mahi', 'numan', 'mydul','zakir','kalid bin walid'];

function bestFriend(btf) {
    // console.log(btf);
    let long1 = '';
    for(let i = 0; i<btf.lenght; i++){
        if (btf[i].lenght > long1) {
            long1 = btf[i].lenght;
        }
    }
    return long1;
}

const btf = friend;
const name1 = bestFriend(btf);
console.log(name1);
