const textOss = document.getElementById('text')
const speedOss = document.getElementById('speed')
const text = 'There is no light without shadow, just as there is no happiness without pain.'
let idx = 1
let speed = 300 / speedOss.value

autotext()

function autotext() {
    textOss.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(autotext, speed)
}


speedOss.addEventListener('input', (e) => speed = 300 / e.target.value)




