const naav = document.querySelector('.nav')
window.addEventListener('scroll' , fixnav)


function fixnav(){
    if(window.scrollY > naav.offsetHeight + 200){
        naav.classList.add('active')
    }else{
        naav.classList.remove('active')
    }
}

