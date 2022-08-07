const hambutton = document.querySelector('.header__hamburger')
const active = document.querySelector('.links')

hambutton.addEventListener('click', () => {
    active.classList.toggle('active')
})

console.log(hambutton)
console.log(active)