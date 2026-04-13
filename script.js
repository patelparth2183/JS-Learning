console.log("Welcome to Javascript");

let a = 10;
console.log("a", a);

let fruits = ["mango", "apple", "guava"];
console.log(typeof(fruits));

let b = 20;

//Arithmatic Operators
let add = a + b;
let sub = b - a;
let mul = a * b;
let exp = a ** b;
let div = b / a;
let mod = b % a;

console.log("Addition of two number is", add);
console.log("substraction of two number is", sub);
console.log("Multiplication of two number is", mul);
console.log("Exponentiation of two number is", exp);
console.log("Division of two number is", div);
console.log("Modulous of two number is", mod);

console.log("Post increment is", a++); //Post increment 10+
console.log("Increment is", a); //Pre decrement 12
console.log("Pre increment is", ++a); //+12
console.log(a);

console.log("Post decrement is", b--); //Post decrement 10+
console.log("decrement is", b); //Pre decrement 12
console.log("Pre decrement is", --b); //+12
console.log(b);


// Assignment Operators
let c = 10;
let d = 20;

c += d; // c = c + d = 30
c -= d; // c = c - d = 30 - 20 = 10
c *= d; // c = c * d = 10 * 20 = 200
c /= d; // c = c / d = 200 / 20 = 10
c %= d; // c = c % d = 10 % 20 = 10
c **= d; // c = c ** d = 10 ** 20 = 100000000000000000000
console.log("Value of c after changes is", c);

let firstName = "Parth";
let lastName = "Patel";
firstName += lastName;
console.log("My full name is", firstName);

// Addition of numer and strings
let number = 27;
let string = " is my age";
let statement = number + string;
console.log(statement);