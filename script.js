const navBtn = document.querySelector(".header .nav-btn");
const header = document.querySelector('.header')

navBtn.addEventListener('click', ()=>{
    navBtn.classList.toggle("open")
    navBtn.setAttribute('aria-expaneded', navBtn.classList.contains('open'));
    header.classList.toggle("open")
})