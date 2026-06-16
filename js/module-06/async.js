console.log("1st code")

setTimeout(function() {
    console.log("2nd code")
}, 2000)


console.log("3rd code")


// Callback
function createMessage(name, callback) {
    setTimeout(() => {
        const message = `Hello ${name}`
        callback(message);
    }, 2000)
}

function displayMessage(message) {
    console.log(message);
}

const create = createMessage('john', displayMessage);

// Pyramid of Doom
function one(val, callback) {
    setTimeout(() => {
        let result = val + 1;
        callback(result);
    }, 2000)
}

function two(val, callback) {
    let result1 = val + 2;
    callback(result1);
}

function three(val, callback) {
    let result2 = val + 3;
    callback(result2);
}

function output() {
    one(0, (result) => {
        two(result, (result1) => {
            three(result1, (result2) => {
                console.log(result2);
            })
        });
    });
}

output();