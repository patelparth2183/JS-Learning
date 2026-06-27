function step1() {
    return new Promise((resolve, reject) => {
        console.log("I am selecting an image");
        setTimeout(()=> {
            resolve("Image Selected");
        }, 4000);
    });
}

function step2() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("Filter applied successfully");
        }, 2000);
    });
}
function step3() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("Caption Applied");
        }, 5000);
    });
}
function step4() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("Image uploaded");
        }, 3000);
    });
}

step1()
.then((result)=> {
    console.log(result);
    return step2();
})
.then((result)=> {
    console.log(result);
    return step3();
})
.then((result)=> {
    console.log(result);
    return step4();
})
.then((result)=> {
    console.log(result);
})