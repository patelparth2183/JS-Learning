
const API = 'https://api.tvmaze.com/search/shows?q=girls';

axios.get(API)
.then((res)=> console.log(res.data))
.catch((err)=> console.log(err));


const API2 = 'https://dummyjson.com/products/1';

async function axiosFn() {
    let response = await axios.get(API2);
    console.log(response.data)
}

axiosFn();