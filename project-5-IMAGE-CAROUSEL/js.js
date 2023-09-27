const imgs = document.getElementById('imgs')
const btnleft = document.getElementById('left')
const btnright = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let index = 0

console.log(img)

let interval = setInterval(run, 2000)

function resertin() {
    clearInterval(interval)
    interval = setInterval
}

btnright.addEventListener('click', () => {
    index++
    changeimgs()
    resertin()
})

function resTed() {
    clearInterval(interval)
    interval = setInterval
}

btnleft.addEventListener('click', () => {
    index--
    changeimgs()
    resTed()
})

function run() {
    index++
    changeimgs()
}

function changeimgs() {
    if (index > img.length - 1) {
        index = 0
    } else if (index < 0) {
        index = img.length - 1
    }


    imgs.style.transform = `translateX(${-index * 500}px)`
}

