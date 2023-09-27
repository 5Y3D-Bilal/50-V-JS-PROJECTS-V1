const range = document.getElementById('range')
const rangecon = document.querySelector('range-container')



range.addEventListener('input' , (e)=>{
    const value = +e.target.value
    const label = e.target.nextElementSibling

    const range_width = getComputedStyle(e.target).getPropertyValue('width')
     


    label.innerHTML = value
    label.style.transform = `scale(${value / 80})`
    
})

