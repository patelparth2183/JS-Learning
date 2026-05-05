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

const arr2 = [10, 20, 30, 40, 50];

const arrReturn = arr2.forEach(function (item, index) {
    console.log(item, "=>", index);
})

console.log("break"); ///////////////////////////////

const arr3 = [10, 20, 30, 40, 50];

const map = arr3.map(function (item, index) {
    return item*item;
})

console.log(map);