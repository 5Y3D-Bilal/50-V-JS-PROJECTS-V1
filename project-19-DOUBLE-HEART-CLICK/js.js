const loveME = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let timesClicked = 0
let clickT = 0

loveME.addEventListener('click', (e) => {
    if (clickT === 0) {
        clickT = new Date().getTime()
    } else {
        if ((new Date().getTime() - clickT) < 800) {
            cHeat(e)
            clickT = 0
        }else {
            clickT = new Date().getTime()
        }
    }
})


function cHeat(e) {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')


    const x = e.clientX
    const Y = e.clientY

    const leftoffset = e.target.offsetLeft
    const topoffset = e.target.offsetTop

    const xindex = x - leftoffset
    const yindex = Y - topoffset

    heart.style.top = `${yindex}px`
    heart.style.left = `${xindex}px`


    loveME.appendChild(heart)

    times.innerHTML = ++timesClicked
    setTimeout(()=> heart.remove(),100000)
}