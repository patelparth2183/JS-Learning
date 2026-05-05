function small() {
    console.log("I am small");
}

function big(fn) {
    console.log("I am big")
    fn();
}

big(small);


function outer() {
    console.log("I am outer");

    function inner() {
        console.log("I am inner");
    }

    return inner();
}

outer();