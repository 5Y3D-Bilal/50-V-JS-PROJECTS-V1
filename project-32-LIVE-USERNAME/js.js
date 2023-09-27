const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getdATA()

filter.addEventListener('input', (e) => {
    filterdata(e.target.value)
}
)

async function getdATA() {
    const res = await fetch(`https://randomuser.me/api?results=1000`)


    const { results } = await res.json()


    result.innerHTML = ''


    console.log(result)

    results.forEach(element => {
        const li = document.createElement('li')


        listItems.push(li)

        li.innerHTML = `
        <img src="${element.picture.large}"></img>
        <div class="user-info">
        <h4>${element.name.first}</h4>
        <p>${element.location.city}</p>
        </div>
        `

        result.appendChild(li)
    });
}

function filterdata(serched) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(serched.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add("hide")
        }
    })
}