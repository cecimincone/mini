// select modal-btn,modal-overlay,close-btn
const openBtn = document.querySelector(".btn-modal")
const modalOverlay = document.querySelector(".modal-overlay")
const closeBtn = document.querySelector(".close-btn")
// listen for click events on modal-btn and close-btn


// when user clicks modal-btn add .open-modal to modal-overlay

// when user clicks close-btn remove .open-modal from modal-overlay



//añadir elementos a los botones

openBtn.addEventListener('click',function(){

   btn-modal.classList.toggle("show-sidebar")})



closeBtn.addEventListener ('click',function(){


    sidebar.classList.remove("show-sidebar")
       
})