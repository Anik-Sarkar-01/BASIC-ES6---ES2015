/*
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
*/
const mathCalculation = (numbers) => {
    let sum = 0;
    let average;
    let totalElements = numbers.length;
    for(let i=0; i<numbers.length; i++){
        const square = numbers[i] * numbers[i];
        sum = sum + square;
        average = sum / totalElements;
    }
    return average;   
}
const numbers = [1,2,3,4,5];
const result = mathCalculation(numbers);
console.log(result);