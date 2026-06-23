// Async & Await
async function fetchData() {
    try {
        const fetchUrl = await fetch('https://dummyjson.com/products/1');
        const result = await fetchUrl.json();
        console.log(result);
    } catch {
        console.log(error);
    }
}

fetchData();