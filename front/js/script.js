let url = ("http://localhost:3000/api/products/");
async function fetchAsync(url) {
    const response = await fetch(url);
    let data = await response.json();
    return data;
}
fetchAsync(url).then(data => console.log(data));