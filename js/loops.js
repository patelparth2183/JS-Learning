//*************** for ***************

for (let a = 1; a <= 5; a++) {
    console.log(a);
}

//*************** for in ***************

let obj = {Parth: 65, Shivani: 85, Simu: 80, Shivu: 90};

for (key in obj) {
    console.log(obj[key]);
}

//*************** for of ***************
let fruits = ["Mango", "Orange", "Guava"];

for(let fruit of fruits) {
    console.log(fruit);
}

//*************** while ***************
let b = 2;
while (b <= 5) {
    console.log(b);
    b++;
}

//*************** do while ***************
let c = 11;
do {
    console.log(c);
    c++;
}
while(c <= 15);

for (let d = 0; d <= 10; d += 2) {
    console.log(d);
}

let d = 0;
while (d <= 10) {
    console.log(d);
    d += 2;
}