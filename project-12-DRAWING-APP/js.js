const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const chcolor = document.getElementById('color')
const reset = document.getElementById('clear')
const increaseSize = document.getElementById('insrease')
const decreaseSize = document.getElementById('decrease')
const displaysize = document.getElementById('size')

reset.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

chcolor.addEventListener('change', (e) => {
    color = e.target.value
})

function updateSizeOnScreen() {
    displaysize.innerText = size
}


increaseSize.addEventListener('click', () => {
    size +=2

    if (size > 50) {
        size = 100
    }

    updateSizeOnScreen()
})

decreaseSize.addEventListener('click', () => {
    size -= 2

    if (size < 20) {
        size = 20
    }

    updateSizeOnScreen()
})



let size = 20
let color = 'black'
let isPressed = false
let x
let y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY

    // console.log(isPressed , x , y)


})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined

    // console.log(isPressed , x , y)


})
canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY


        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }

})


function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}



// dragcircl(100, 200)
// drawline(300, 300, 200, 500)