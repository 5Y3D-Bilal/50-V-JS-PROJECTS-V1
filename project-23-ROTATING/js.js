const open = document.getElementById('open')
const close = document.getElementById('close')
const con = document.querySelector('.container')



open.addEventListener('click' , ()=> con.classList.add('show-nav'))
close.addEventListener('click' , ()=> con.classList.remove('show-nav'))

