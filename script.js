const navBtn = document.querySelector(".header .nav-btn");
const header = document.querySelector('.header')

navBtn.addEventListener('click', ()=>{
    navBtn.classList.toggle("open")
    header.classList.toggle("open")
})