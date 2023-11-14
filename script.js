
const nav = document.querySelector('#head__nav')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => btn.addEventListener('click', function() {
    
    nav.classList.toggle('nav__list-large')
    // nav.classList.toggle('nav__list')
    
   
    
}))




// if (btn) {
//     console.log('est')
//     btn.addEventListener('click', function() {
//         nav.classList.toggle('nav__list')
//         nav.classList.toggle('nav__list-large')
        
        
//     })
// }



// const navButton = document.querySelector('.header__nav-btn-large');
// const navButtonOff = document.querySelector('.header__nav-btn')

// function openMenu() {
//     const nav = document.querySelector('.nav__list');
//     nav.style.width = '300px'
    
//     navButton.style.display = 'none'
// }

// function closeMenu() {
//     const nav = document.querySelector('.nav__list');
//     nav.style.display = 'none'
//     navButton.style.display = 'block'
// }


// if (navButton) {
//     navButton.addEventListener('click', openMenu)
// }

// if (navButtonOff) {
//     navButtonOff.addEventListener('click', closeMenu)
// }


