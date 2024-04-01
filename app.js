let openHam = document.querySelector('#menu-bar');
let closeHam = document.querySelector('#close-menu-bar');
let navigationItems = document.querySelector('.side-bar');


openHam.addEventListener('click', ()=>{
  navigationItems.classList.toggle('show')
})

closeHam.addEventListener('click', ()=>{
  navigationItems.classList.remove('show')
})