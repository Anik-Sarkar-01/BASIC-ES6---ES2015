// When we don't need any parameter 
const getPie = () => 3.14;
console.log(getPie());

// When We have only one parameter, the It's not mandatory to give bracket on parameter
const doubleIt = num => num*2;
console.log(doubleIt(10));

/*For multiline arrow function we need to return something explicitly.
 If not multiline arrow function then its not required.*/
const doMath = (x,y,z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const result = firstSum + secondSum;
    return result;
}
console.log(doMath(1,2,3));