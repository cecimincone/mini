//traer las referencias 

const toggleBtn = document.querySelector(".siderbar-toggle")
const closeBtn = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar")

//añadir elementos a los botones

toggleBtn.addEventListener('click',function(){

    sidebar.classList.toggle("show-sidebar")})



closeBtn.addEventListener ('click',function(){


    sidebar.classList.remove("show-siderbar")
       
})