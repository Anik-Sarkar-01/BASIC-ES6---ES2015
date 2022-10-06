// Use of the spread operator
const numbers = [12,85,999,78];
// If we directly pass an array to the math.max function then this will not give expected result.
//const largest = Math.max(numbers);
//So we should use ... infront of the array name.Then we will get the expected result.
const largest = Math.max(...numbers);
console.log(largest);

//How to copy an array
let nums = [3,4,5];
let allNumbers = [1,2,...nums,6,7];
console.log(allNumbers);