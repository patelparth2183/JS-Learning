// To check the length of the string
let a = "Hello Parth and Hello Patel";

console.log(a.length);

// To Replace
let replace = a.replace("Parth", "Paarth");
let replaceAll = a.replaceAll("Hello", "Hi");
console.log(replace);
console.log(replaceAll);

// To Trim
let b = "    Hello to Me ";
let trim = b.trim();
let trimStart = b.trimStart();
let trimEnd = b.trimEnd();
console.log(trim);
console.log(trimStart);
console.log(trimEnd);

// To Split
let c = "My name is Parth Patel";
let d = "Parth, Patel, 27, 15";

let split = c.split(" ");
let split2 = d.split(",");

console.log(split);
console.log(split2);

// To Concat
let firstName = "Parth";
let lastName = "Patel";
let fullName = firstName.concat(lastName);

console.log(fullName);

// To repeat
console.log(fullName.repeat(2));