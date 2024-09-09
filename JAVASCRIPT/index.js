let nav = document.querySelector(".nav")
require('dotenv').config();

window.addEventListener("scroll", () =>{
    if(window.scrollY > 0){
        nav.classList.add("scrolled")
    }
    else{
        nav.classList.remove("scrolled")
    }
})
