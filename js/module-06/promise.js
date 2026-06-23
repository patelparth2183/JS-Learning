function promise(result) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (result) {
                resolve("Successful");
            } else {
                reject("Rejected");
            }
        }, 2000)
    })
}

promise(true).then((result) => {console.log(result)});
promise(false).catch(err => console.log(err))


// Fetch
const firstObject = fetch('https://dummyjson.com/products/1').then((response)=>response.json());
const secondObject = fetch('https://dummyjson.com/products/2').then((response)=>response.json());
const thirdObject = fetch('https://dummyjson.com/products/3').then((response)=>response.json());

Promise.all([firstObject, secondObject, thirdObject])
    .then((responses)=> {
        for (let  response of responses) {
            console.log(response);
        }
    })
    .catch(err => console.log(`Faild to fetch ${err}`));