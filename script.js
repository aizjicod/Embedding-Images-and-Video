//menu design
const menu__btn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar")

menu__btn.addEventListener("click",()=>{
    if(navbar.classList.contains("showmenu")){
        navbar.classList.remove("showmenu");
    }else{
        navbar.classList.add("showmenu");
    }
})

//subscribe btn design 

const subscribe__btn = document.querySelector(".info-btn");
subscribe__btn.addEventListener("click",()=>{
    if(subscribe__btn.classList.contains("subscribed")){
        subscribe__btn.classList.remove("subscribed");
        subscribe__btn.style.animation = "clicked .3s ";
        subscribe__btn.innerHTML = "subscribe";
    }else{
        subscribe__btn.classList.add("subscribed");
        subscribe__btn.style.animation = "clicked .3s";
        subscribe__btn.innerHTML = "subscribed";
    }
    
});