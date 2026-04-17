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