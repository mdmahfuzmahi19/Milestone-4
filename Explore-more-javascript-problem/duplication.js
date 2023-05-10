function removeDuplication(names) {
    const unique = [];
    for(let i = 0; i <names.length; i++){
        const name = names[i];
        console.log(name);
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}

const names = ['abul', 'babul', 'kamrul', 'jamrul', 'abul', 'kamrul', 'babul', 'abul', 'abul']
const mainNames = removeDuplication(names);
console.log(mainNames);