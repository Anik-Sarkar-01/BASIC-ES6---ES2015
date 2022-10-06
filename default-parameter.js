// Previous System
/*
function add(num1 , num2){
    console.log(num1,num2);
    num2 = num2 || 0;
    // if(num2 === undefined){
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(10);
console.log(result);
*/

// Modern System updated on ES-6 - DEFAULT PARAMETER
function add(num1 = 0 , num2 = 0){
    console.log(num1,num2);
    const total = num1 + num2;
    return total;
}

const result = add();
console.log(result);
