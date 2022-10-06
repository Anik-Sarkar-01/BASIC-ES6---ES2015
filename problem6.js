/*
Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
*/
const maxNumberOfTwoArray = (array1,array2) => {
    const newArray = [...array1,...array2];
    const maximum = Math.max(...newArray);
    return maximum;
}
const array1 = [10,20000,30,40,50,5000];
const array2 = [100,200,300,400,500];
const result = maxNumberOfTwoArray(array1,array2);
console.log(result);