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