// Function Expression with function name
const add1 = function add1(first,second){
    return first + second;
}
console.log(add1(10,20));

// Function Expression without function name - Annonymous
const add2 = function (first,second){
    return first + second;
}
console.log(add2(10,30));

// Arrow Function
const add3 = (first,second) => first + second;
console.log(add3(40,50));
