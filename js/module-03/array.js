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
    console.log(item + index);
})

console.log("break"); ///////////////////////////////

const arr3 = [10, 20, 30, 40, 50];

const map = arr3.map(function (item, index) {
    return item*item;
})

console.log(map);

console.log("break"); ///////////////////////////////

const cube = [1, 2, 3, 4, 5];

const cubemap = cube.map(function(item, index) {
    return item**3;
})

console.log(cubemap);

console.log("break"); ///////////////////////////////

let fil = [1, 3, 5, 7, 9];

function dfil(fil) {
    let out = fil.map(function(item, index) {
        return item * 2;
    })
    .filter(function(item,index) {
        if (item >= 10) {
            return true;
        }
        else {
            return false;
        }
    })

    return out;
}

console.log(dfil(fil));