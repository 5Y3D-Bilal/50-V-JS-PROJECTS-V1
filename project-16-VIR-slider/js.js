const slider = document.querySelector('.slider-container')
const slideright = document.querySelector('.right-slide')
const slideleft = document.querySelector('.left-slide')
const btnup = document.querySelector('.up-button')
const btndown = document.querySelector('.down-button')
const slideslength = slideright.querySelectorAll('div').length



let activeslideindex = 0

slideleft.style.top = `-${(slideslength - 1) * 100}vh`

btnup.addEventListener('click', () => changeslide('up'))
btndown.addEventListener('click', () => changeslide('down'))


const changeslide = (direction) => {
    const sliderheigth = slider.clientHeight
    if(direction === 'up'){
        activeslideindex++
        if(activeslideindex > slideslength -1){
            activeslideindex = 0
        }
    }else if(direction === 'down'){
        activeslideindex--
        if(activeslideindex < 0){
            activeslideindex = slideslength - 1
        }
    }

    slideright.style.transform = `translateY(-${activeslideindex * sliderheigth}px) `
    slideleft.style.transform = `translateY(${activeslideindex * sliderheigth}px) `


}

