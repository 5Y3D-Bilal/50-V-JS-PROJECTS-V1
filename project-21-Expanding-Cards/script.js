const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeactive()
        panel.classList.add('active')
    })
})

function removeactive() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}