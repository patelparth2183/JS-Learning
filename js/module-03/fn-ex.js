var a = 10;
x();
y();

function x() {
    var a = 20;
    console.log(a);
}

function y() {
    var a = 30;
    console.log(a);
}

console.log(a);