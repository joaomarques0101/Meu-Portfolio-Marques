let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let orveley = document.getElementById('')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abri-menu')
})


menu.addEventListener('click', ()=>{
    menu.classList.remove('abri-menu')
})
orveley.addEventListener('click', ()=>{
    menu.classList.remove('abri-menu')
})