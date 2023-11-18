
const nav = document.querySelector('#head__nav')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => btn.addEventListener('click', function() {
    
    nav.classList.toggle('nav__list-large')
    // nav.classList.toggle('nav__list') 
}))


