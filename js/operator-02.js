//***************Comparison Operators***************
let age1 = 17;
let age = 18;
let age2 = 19;
let age3 = "17"

console.log("Person is Adult:", age2 > 18);
console.log("Person is not Adult:", age2 < 18);
console.log("Person is Adult or not:", age1 >= 18);

// == & ===
console.log("only number:", age3 == age1);
console.log("number and data type:", age3 === age1);

// !== & !=== not equal to
console.log("only number:", age3 != age1);
console.log("number and data type:", age3 !== age1);


console.log("***** Break *****");


//*************** Logical Operators ***************
let a = 10;
let b = 20;

console.log(a == 10 && a < b); //true && true = true
console.log(a == 10 && a > b); //true && false = false
console.log(a == 20 || a > b); //false || false = false
console.log(a == 10 || a > b); //true || false = true
console.log(!(b == 20)); //Converts true into false
console.log(!(b > 20)); //Converts false into true