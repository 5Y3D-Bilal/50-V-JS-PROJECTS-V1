const codes = document.querySelectorAll('.code')

const color = ['yellow', 'green', 'blue', 'red' , 'pink', 'seagreen']
codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = ''
            setTimeout(() => codes[idx + 1].focus(), 10)

        } else if (e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1].focus(), 10)

        }
    })
    
    const colors = getRandomColors()
    code.style.color = `${colors}`
    code.style.valid = `${colors}`
})
function getRandomColors() {
    return color[Math.floor(Math.random() * color.length)]
}