const sounds = ["boo" , 'applause' , ' gasp' , 'tada' , 'victory' , 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.addEventListener('click', ()=>{
        document.getElementById(sound).play()
    })

    btn.innerText = sound

    document.getElementById('buttons').appendChild(btn)
})