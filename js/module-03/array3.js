// Sort
const arr = ["Apple", "Mango", "Banana", "Orange"];
console.log(arr.sort());

const fruits = ["Apple", "Mango", "Banana", "Orange"];
console.log(fruits.toSorted());
console.log(fruits);

const num = [2,98,54,56,95,72,10];
console.log(num.sort(function (a,b) {return a-b}));

const minimumNumber = Math.min(...num);
console.log(minimumNumber);