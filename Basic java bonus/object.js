const nayko ={
    name:'mahi',
    id: 12133434762,
    address : 'baluchor',
    isSingel : true,
    friend: ['mahi', 'ardan', 'farhan'],
    movies: [{name:'kong fu panda', year: 2010,},{name:'kong fu panda 2', year: 2018},{name: 'kong fu panda 3', year:2021}],
    act: function () {
        console.log('trying to be like saruk khan ');
    } ,
    car : {
        brand: 'toyota',
        price: 5030300,
        made: 'chaina',
        menuFacturer: {
            name: 'toyota',
            ceo: 'unKnow',
            headOffice: 'usa',
        }
    }
}
// console.log(student.movies);
console.log(nayko.act);
nayko.act();