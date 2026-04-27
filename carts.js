let cards = document.querySelector(".cards");

let task = async () => {
    let d = await fetch("https://dummyjson.com/carts");
    let j = await d.json();
    let fd = j.carts;

    cards.innerHTML = "";

    fd.forEach((e) => {
        let productsHTML = "";

        e.products.forEach((ele) => {
            productsHTML += `
            <div class="innercard">
                <h5>Id: ${ele.id}</h5>
                <h4>${ele.title}</h4>
                <h6>Price: ${ele.price}</h6>
                <h6>Qty: ${ele.quantity}</h6>
                <h6>Total: ${ele.total}</h6>
                <h6>Discount: ${ele.discountPercentage}</h6>
                <h6>Final: ${ele.discountedTotal}</h6>
                <img src="${ele.thumbnail}" width="80"/>
            </div>`;
        });

        cards.innerHTML += `
        <div class="card">
            <h4>Cart ID: ${e.id}</h4>

            <div class="innercards">
                ${productsHTML}
            </div>

            <h5>Total: ${e.total}</h5>
            <h5>Discounted: ${e.discountedTotal}</h5>
            <h5>User: ${e.userId}</h5>
            <h5>Products: ${e.totalProducts}</h5>
            <h5>Quantity: ${e.totalQuantity}</h5>
        </div>`;
    });
};

task();