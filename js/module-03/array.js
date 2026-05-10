let arr = [10, 20, 30, 40, 50];
console.log(arr);

arr.push(100, 200);
console.log("Push is", arr);

arr.pop();
console.log("Pop is", arr);

arr.unshift(5, 15);
console.log("Unshift is", arr);

arr.shift();
console.log("Shift is", arr);

console.log("break"); ///////////////////////////////

// Sort
const arr2 = ["Apple", "Mango", "Banana", "Orange"];
console.log(arr2.sort());

const fruits = ["Apple", "Mango", "Banana", "Orange"];
// console.log(fruits.toSorted());
// console.log(fruits);

const num = [2,98,54,56,95,72,10];
console.log(num.sort(function (a,b) {return a-b}));

const minimumNumber = Math.min(...num);
console.log(minimumNumber);

console.log(fruits.sort());
console.log(fruits.reverse());