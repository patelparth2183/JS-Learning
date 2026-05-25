console.log("Functions Problems") /////////////////////////////////////////////////////////////////////
// Create a function to find the square of a number.
function squre(a) {
    console.log(a*a);
}
squre(5);

// Create a function that returns the largest of two numbers.
function large(a,b) {
    if (a>b) {
        console.log(a);
    }
    else {
        console.log(b);
    }
    
}
large(5,45);

// Write a function to check if a number is prime.
function isPrime(a) {
    if(a <= 1) {
        return false
    }

    for (let j = 2; j < a; j++) { 
        if(a % j === 0) {
            return false;
        }
    }

    return true;
}
console.log(isPrime(7))

// Write a function that counts vowels in a string.
function countVowel(a) {

    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let char of a) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(count);
}
let b = "My name is Parth";
countVowel(b)

// Create a function that reverses a string.
let c = "My name is Parth";
function reverseString(a) {
    return a.split("").reverse().join("");
}
console.log(reverseString(b));

function reverseString_02(a) {
    let reversed = "";
    for (let i = a.length - 1; i >= 0; i--) {
        reversed += a[i];
    }
    return reversed;
}
console.log(reverseString_02("Shivani"));

// Write a function to capitalize the first letter of every word.
let d = "My name is Parth";
function capFirst(a) {
    let word = a.split(" ");

    let result = word.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return result.join(" ");
}
console.log(capFirst(d));

// Create a function that checks if a string is palindrome.
let e = "racecar";
function isPalindrome(a) {
    for (let i = 0; i < (Math.floor(a.length / 2)) - 1; i++) {
        if (a[i] === a[a.length - 1 - i]) {
            return "Is Palindrome";
        }
        else {
            return "Is not Palindrome";
        }
    }
}
console.log(isPalindrome(e));

// Write a function that removes duplicate characters from a string.
let f = "My name is Parth";
function removeDuplicate(a) {
    let result = "";
    for (let char of a) {
        if (!result.includes(char)) {
            result += char;
        }
    }
    return result;
}
console.log(removeDuplicate(f));

// Create a function that returns factorial using recursion.
function factorial(a) {
    let b = 1;
    for (let i=1; i<=a; i++) {
        b = b * i;
    }
    return b;
}
let g = 5;
console.log(factorial(g));

function fact(a) {
    if (a === 0 || a === 1) {
        return 1;
    }

    return a * fact(a - 1);
}
console.log(fact(10));

// Create a recursive Fibonacci function.
function fib(a) {

    if (a === 0) {
        return 0;
    }

    if (a === 1) {
        return 1;
    }

    return fib(a - 1) + fib(a - 2);
}
console.log(fib(6));


console.log("Arrays Problems") /////////////////////////////////////////////////////////////////////
// Find the sum of all elements in an array.
let h = [25, 52, 85, 66, 46];

const i = h.reduce((acc, curr) => {
    return acc = acc + curr;
}, 0)

console.log(i);

// Find the largest element in an array.
h.sort()
console.log(h[h.length - 1]);

const j = h.reduce((max, curr) => {
    if (max < curr) {
        max = curr;
    }
    return max;
}, 0);
console.log(j);

// Find the smallest element in an array.
console.log(h[0]);

const k = h.reduce((min, curr) => {
    if (min > curr) {
        min = curr;
    }
    return min;
});
console.log(k);

// Reverse an array without using .reverse().
let l = [25, 52, 85, 66, 46, 52];

const reversed = [];
for (let i = l.length - 1; i >= 0; i--) {
    reversed.push(l[i]);
}
console.log(reversed);

// Count even and odd numbers in an array.
let even = 0;
for (let num of l) {
    if(num % 2 === 0) {
        even++
    }
}

let odd = 0;
for (let num of l) {
    if(num % 2 !== 0) {
        odd++
    }
}
console.log(odd);
console.log(even);

// Find duplicate elements in an array.
const duplicates = [];

for (let i = 0 ; i < l.length; i++) {
    for (let j = i + 1; j < l.length; j++) {
        if(l[i] === l[j] && !duplicates.includes[l[i]]) {
            duplicates.push(l[i]);
        }
    }
}

console.log(duplicates);

// Remove duplicates from an array.
let m = [25, 52, 85, 66, 46, 52];
const unique = [];
for (let i = 0; i < m.length; i++) {
    if (!unique.includes(m[i])) {
        unique.push(m[i]);
    }
}
console.log(unique);

// Merge two arrays.
console.log(h.concat(l));

// Sort an array without using .sort().
for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m.length - 1; j++) {
        if (m[j] > m[j + 1]) {
            let temp = m[j];
            m[j] = m[j + 1]
            m[j + 1] = temp;
        }
    }
}
console.log("Sorted", m);

// Find second largest number in an array.
m.sort((a,b) => a-b);
m.reverse();
let secondLargenst = m[1];
console.log("Second Largest", secondLargenst);


let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of m) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log(secondLargest);

// Rotate array to the right by 1 step.
let remove = m.shift();
m.push(remove);
console.log("Rotate", m);

// Find intersection of two arrays.
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const intersection = [];

for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
        intersection.push(arr1[i]);
    }
}

console.log(intersection);

// Find missing number in an array from 1 to N.
const arr = [1, 2, 3, 5];
const num = 5;

let expectedSum = (num * (num + 1)) / 2;
let actualSum = 0;

for (let num of arr) {
    actualSum += num;
}

console.log(expectedSum - actualSum);

// Move all zeros to the end of array.
const o = [0,5,13,80,0,5,12,0,78,0]
let endZero = [];

for (let num of o) {
    if(num !== 0) {
        endZero.push(num);
    }
}

console.log(endZero.length)
while (endZero.length < o.length) {
    endZero.push(0)
}
console.log(endZero);

// Chunk an array into smaller arrays.
let n = [25, 52, 85, 66, 46, 52, 35];
const size = 3;
const chunks = [];

for (let i = 0; i < n.length; i += size) {
    chunks.push(n.slice(i, i + size));
}

console.log(chunks);