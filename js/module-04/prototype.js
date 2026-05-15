const user = {
    firstName : "Parth",
    lastName : "Patel",
}

const newDay = new Date();
console.log(newDay);
const newYear = newDay.getFullYear();
console.log(newYear); // 2026

newDay.getFullYear = () => {
    console.log("Get Full Year Function");
}
newDay.getFullYear(); //Get Full Year Function

const parent = {
    a: 10,
    b: 20,

    sum: function() {
        console.log(this.a + this.b);
    }
}

const child = {
    c: 30,
    d: 40,

    multiplication: function(){
        console.log(this.c * this.d);
    }
}

console.log(child);
child.__proto__ = parent;
child.sum();