const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.inpput')

btn.addEventListener('click', ()=>{
    search.classList.toggle('active')
    input.focus()
})