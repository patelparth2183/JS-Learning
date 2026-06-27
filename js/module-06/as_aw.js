// Async & Await
// async function fetchData() {
//     try {
//         const fetchUrl = await fetch('https://dummyjson.com/products/1');
//         const result = await fetchUrl.json();
//         console.log(result);
//     } catch {
//         console.log(error);
//     }
// }

// fetchData();

const API = 'https://api.tvmaze.com/search/shows?q=girls'
let finalData = null;
fetch(API)
.then((response)=> response.json())
.then((data)=> {
    finalData = data;
    for(let item of finalData) {
        console.log(item.show.name, ":", item.show.rating.average);
    }
})

let finalData2 = null;
async function calling() {
    let data = await fetch(API);
    let response = await data.json();
    finalData2 = response;
    for(let item of finalData2) {
        console.log(item.show.name, ":", item.show.rating.average);
    }
}
calling()