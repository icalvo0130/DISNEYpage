let allProducts = [];

async function fetchData() {
    let response = await fetch('https://rickandmortyapi.com/api/character')
    let json = await response.json()
    let data = json["results"]
    parseDataToProducts(data)
}

//pasa de array data a Product 
function parseDataToProducts(data) {
    for (let i = 0; i < data.length; i++) {
        let map = data[i];
        let product = new Product(
            map["name"],
            map["caracteristica1"],
            map["caracteristica2"],
            map["caracteristica3"],
            map["precio"],
            map["cantidad"],
            map["imagenes"]
        );
        allProducts.push(product);
    }
    renderAllProducts(allProducts)
}

function renderAllProducts(products) {
    let container = document.getElementById("box");
    container.innerHTML = ""; 

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        container.innerHTML += product.htmlCard(i); 
    }
}

document.getElementById("search").addEventListener("input", function(event) {
    event.preventDefault()

    let search = document.getElementById("search").value.toLowerCase()

    if (search === "" || search.length === 0) {
        renderAllProducts(allProducts)
    } else {
        let filteredProducts = allProducts.filter(function(product) {
            return product.name.toLowerCase().includes(search);
        });
        renderAllProducts(filteredProducts);
    }
})

//para llegar a la pag de detalle de product
function productSelected(pos) {
    let productselected = allProducts[pos];    
    window.location = "./producto1.html?name=" + encodeURIComponent(productselected.name);
}

fetchData();