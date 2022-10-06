// Object Destructuring
const fish = {
    name: 'king Hilsha',
    address: 'Chadpur',
    color: 'silver',
    phone: '0174045689',
    price: 4000
};

const{color} = fish;
console.log(color);

const {price} = fish;
console.log(price);

const {age,name} = {name:'Almas', age:'56', profession: 'makeup artist'};
console.log(age);


// Array Destructuring
const [first,another] = [44,99,88,456];
console.log(first,another);

const nayoks = ['shakib','bappi','raj'];
const[king,lost,notun] = nayoks;
console.log(notun);

function getNames(){
    return ['Alim', 'Halim'];
}
const [baba,cacha] = getNames();
console.log(cacha,baba);