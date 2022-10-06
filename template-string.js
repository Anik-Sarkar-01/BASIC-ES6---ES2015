const person1 = "Abdul";
const person2 = "Habul";
const person3 = `Kabul`;

const multiLine = "First Line of code\n" + "Second Line of Code";
console.log(multiLine);

// we can make multiline easily using back tick
const newMultiLine = `Fist Line of Code 
Second Line of code 
Third Line of Code`;
console.log(newMultiLine);

const a = 20;
const b  = 30;
const sum = " sum of: " + a + ' and ' + b + ' is: ' + (a+b);
console.log(sum);


// we can make strig dynamic using back tick easily.This is called string interpolation
const newSum = `sum of ${a} and ${b} is: ${a+b}`;
console.log(newSum);