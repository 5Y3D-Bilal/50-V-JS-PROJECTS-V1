const rat = document.querySelectorAll('.rating')
const ratcon = document.querySelector('.ratings-container')
const feedback = document.querySelector('#send')
const panel = document.querySelector('#panel')

let selectedRating = 'Satisfied'

ratcon.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.
        nextElementSibling.innerHTML
        console.log(selectedRating)
    }
})


feedback.addEventListener('click', (e) => {
    panel.innerHTML = ` 
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feekback:  ${selectedRating}</strong>
    <p>PikaNetwork is one of the largest Minecraft cracked servers! Since the day PikaNetwork was formed, back in 2014, we have focused on bringing joy to the community.</p>
    `
})


function removeActive() {
    for (let i = 0; i < rat.length; i++) {
        rat[i].classList.remove('active')
    }
}





























