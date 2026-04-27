let url = "https://dummyjson.com/products";
let cards = document.querySelector(".cards");

let task = async () => {
    let data = await fetch(url);
    let fd = await data.json();
    let map_data = fd.products;

    cards.innerHTML = "";

    map_data.forEach((e) => {
        cards.innerHTML += `
        <div class="card">
            <h4>ID: ${e.id}</h4>
            <p>${e.description}</p>
            <h3>${e.title}</h3>
            <h4>Price: ${e.price}</h4>
            <p>Brand: ${e.brand}</p>
            <h4>Rating: ${e.rating}</h4>
            <p>Stock: ${e.stock}</p>
        </div>`;
    });
};

task();