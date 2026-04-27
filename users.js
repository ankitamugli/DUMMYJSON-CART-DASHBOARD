let url = "https://dummyjson.com/users";
let cards = document.querySelector(".cards");

let task = async () => {
    let data = await fetch(url);
    let fd = await data.json();
    let map_data = fd.users;

    cards.innerHTML = "";

    map_data.forEach((e) => {
        cards.innerHTML += `
        <div class="card">
            <h4>ID: ${e.id}</h4>
            <p>${e.firstName} ${e.lastName}</p>
            <p>Maiden: ${e.maidenName}</p>
            <h3>Age: ${e.age}</h3>
            <h4>Gender: ${e.gender}</h4>
            <p>Email: ${e.email}</p>
            <h4>Phone: ${e.phone}</h4>
            <p>Username: ${e.username}</p>
            <h4>DOB: ${e.birthDate}</h4>
        </div>`;
    });
};

task();