console.log("Problems of Variables & Operators") /////////////////////////////////////////////////////////////////////
// Create two variables and swap their values without using a third variable.
let a = 5;
let b = 10;
a = a + b; // 15
b = a - b; // 5
a = a - b; // 10
console.log("a =", a);
console.log("b =", b);

// Check whether a number is positive, negative, or zero.
let c = 5;
if (c>0) {
    console.log("Positive")
}
else if (c=0) {
    console.log("Zero");
}
else {
    console.log("Negative")
}

// Find the largest among 3 numbers.
let d = 1;
let e = 4;
let f = 8;

if (d > e && d > f) {
    console.log("The largest number is", "d");
}
else if (e > d && e > f) {
    console.log("The largest number is", "e");
}
else {
    console.log("The largest number is", "f");
}

// Convert Celsius to Fahrenheit.
let cel = 36;
console.log(cel * (9/5) + 32); //(0°C × 9/5) + 32 = 32°F

// Calculate the area and perimeter of a rectangle.
let len = 15;
let wid = 10;
console.log("Area and Parameter of the rectangle are", len * wid,"and",2*(len + wid));


console.log("Conditionals Problems") /////////////////////////////////////////////////////////////////////
// Check whether a year is a leap year.
let year = 2100;
console.log("Year is a leap year", ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0));

// Check whether a character is a vowel or consonant.
let char = "f";
let result = (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") ? "Charactor is vowel" : "Charactor is consonant";
console.log(result)

// Create a grading system:
// 90+ → A
// 80+ → B
// 70+ → C
// below 70 → Fail
let grade = 86;
if (grade >= 90 && grade <= 100) {
    console.log("A")
}
else if (grade >= 80 && grade < 90) {
    console.log("B")
}
else if (grade >= 70 && grade < 80) {
    console.log("C")
}
else{
    console.log("Fail")
}

// Check if a number is divisible by both 3 and 5.
let g = 90;
console.log(g % 3 == 0 && g % 5 == 0);

// Create a simple calculator using switch.
let h = 10;
let i = 5;
let operator = "*";

switch (operator) {
    case "+":
        console.log(h + i);
        break;

    case "-":
        console.log(h - i);
        break;

    case "*":
        console.log(h * i);
        break;

    case "/":
        console.log(h / i);
        break;

    default:
        console.log("Invalid Operator");
}


console.log("Loops Problems") /////////////////////////////////////////////////////////////////////
// Print numbers from 1 to 100.
for (let j = 1; j <= 5; j++) {
    console.log(j);
}
// Print even numbers between 1 and 50.
for (let j = 0; j <= 10; j++) {
    if (j % 2 === 0 ) {
        console.log(j);
    }
}

// Find factorial of a number.
let num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log("Factorial:", factorial);

// Reverse a number.
let revNum = 12345;
let reversed = 0;
while (revNum > 0) {
    let digit = revNum % 10; // 5, 4, 3, 2, 1
    reversed *= 10 + digit; // 0 + 5 , 50 + 4 = 54, 540 + 3 = 543, 5430 + 2 = 5432, 54320 + 1 = 54321
    revNum = Math.floor(revNum / 10); // 1234, 123, 12, 1
}
console.log("Reversed Number:", reversed);

// Count digits in a number.
let couDig = 123456;
let count = 0;
while (couDig > 0) {
    count++; // 1, 2, 3, 4, 5, 6
    couDig = Math.floor(couDig / 10); //12345, 1234, 123, 12, 1, 0
}
console.log("Total Digits:", count);

// Find sum of digits.
let sumDigit = 54824;
let sum = 0;
while (sumDigit>0) {
    let digit = sumDigit % 10; // 4,2,8,4,5
    sum += digit; //4,6,14,18,23
    sumDigit = Math.floor(sumDigit/10); // 5482,548,54,5,0
}
console.log("Sum of digits is:", sum);

// Check whether a number is palindrome.
let original = 121;
let number = original;
let rev = 0;

while (number > 0) {
    let digit = number % 10; //1, 2, 1
    rev = rev * 10 + digit; //1, 12, 121
    number = Math.floor(number / 10); //12, 1
}

if (original === rev) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}


// Print multiplication table of a number.
let mul = 5;
for (let j = 1; j <= 10; j++) {
    console.log(`${mul} x ${j} = ${mul * j}`);
}

// Find all prime numbers between 1 and 100.
for (let j = 2; j <= 20; j++) {

    let prime = true;

    for (let i = 2; i < j; i++) {
        if(j % i === 0) {
            prime = false;
            break
        }
    }

    if (prime) {
        console.log(j)
    }
}

// Print Fibonacci series up to N terms.

let k = 10;

let first = 0;
let second = 1;

console.log(first);
console.log(second);

for (let i = 3; i <= k; i++) {
    let next = first + second;
    console.log(next); // 1, 2, 3, 5, 8, 13

    first = second; // 1, 1, 2, 3, 5, 8
    second = next; // 1, 2, 3, 5, 8, 13
}