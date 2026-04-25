// Default Parameter
function sum(a, b = 50) {
    return a + b;
}

let result = sum(30);
console.log(result);

//Spread Syntext
function mul(a, b) {
    return a * b;
}

let multiplication = [5, 6];
let multiply = mul(...multiplication);
console.log(multiply);

// Array to Object
let arr = ["Parth", "Shivani", "Simu", "Shivu"];
let obj = {...arr};
console.log(obj);

// Rest parameters
function rest(...a) {
    let sum = 0;
    for (let value of a) {
        sum = sum + value;
    }

    return sum;
}

let total = rest(5, 10, 15, 20);
console.log(total);