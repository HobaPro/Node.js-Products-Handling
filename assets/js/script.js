
const productsArea = document.getElementsByClassName('products')[0];


const data = fetch("http://localhost:3000/api/products")
.then(res => res.json())
.then(function (data) { console.log(data.results)})