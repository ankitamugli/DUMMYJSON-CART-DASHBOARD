let cards = document.getElementsByClassName("cards")[0];
let input = document.getElementById("inp");
let submit = document.getElementById("submit");

let allQuotes = [];

fetch("https://dummyjson.com/quotes")
    .then(res => res.json())
    .then(data => {
        allQuotes = data.quotes;
    });

submit.addEventListener("click", () => {
    cards.innerHTML = ""; // clear old cards

    let search = input.value.toLowerCase();

    allQuotes.forEach(ele => {
        if (ele.author.toLowerCase().includes(search)) {
            cards.innerHTML += `
                <div class="card1">
                    <p>${ele.id}</p>
                    <p>${ele.quote}</p>
                    <p>${ele.author}</p>
                </div>
            `;
        }
    });
});