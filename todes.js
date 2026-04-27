let cards = document.getElementsByClassName("cards")[0]

let url = "https://dummyjson.com/todos"

let task = async () => {
    let data = await fetch(url)
    let fd = await data.json()
    let map_data = fd.todos

    map_data.forEach((e) => {
        if (e.completed == false) {
            cards.innerHTML += `
            <div class="card" style="background-color: rgb(175, 77, 93);">
                <h4>${e.id}</h4>
                <p>${e.todo}</p>
                <h3>${e.completed}</h3>
                <h5>${e.userId}</h5>
            </div>`
        } else {
            cards.innerHTML += `
            <div class="card" style="background-color: green;">
                <h4>${e.id}</h4>
                <p>${e.todo}</p>
                <h3>${e.completed}</h3>
                <h5>${e.userId}</h5>
            </div>`
        }
    })
}

 task()


 




