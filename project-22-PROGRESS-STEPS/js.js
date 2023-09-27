const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circle = document.querySelectorAll('.circle')

let curntactive = 1

next.addEventListener('click', () => {
    curntactive++

    if (curntactive > circle.length) {
        curntactive = circle.length
    }

    update()
})

prev.addEventListener('click', () => {
    curntactive--

    if (curntactive < 1) {
        curntactive = 1
    }

    update()
})


function update() {
    circle.forEach((circle, index) => {
        if (index < curntactive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length / circle.length) * 340 + 'px'

    if (curntactive === 1) {
        prev.disabled = true
    } else if (curntactive === circle.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

