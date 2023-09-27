const btn = document.getElementById('button')
const toast = document.getElementById('toasts')


const messages = [
    'hi guys',
    'whats up mate',
    'pain is good',
]



btn.addEventListener('click', () => createNot())


function createNot(messages = null) {
    const noti = document.createElement('div')
    noti.classList.add('toast')

    noti.innerText = getrandimassage()

    noti.innerText = messages ? messages : getrandimassage()

    toast.appendChild(noti)

    setTimeout(() => {
        noti.remove()
    }, 3000);
}

function getrandimassage() {
    return messages[Math.floor(Math.random() * messages.length)]
}