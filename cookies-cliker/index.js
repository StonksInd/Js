//! definition des varibles globales

let total_cookie = 0
let cookie_per_s = 0

//! elt du dom

const cookie_image = document.getElementById("cookies_img")
const cookie_counter_tag = document.getElementById("cookie_counter")

//! Function
function initializeGame (){
    const saved = localStorage.getItem("saved_cookies")
    console.log("saved ", saved)
    if(!saved){
        localStorage.setItem("saved_cookies", 0)
        total_cookie = 0
    }
    else{
        total_cookie = parseInt(saved)
    }
}

function changer_cookie_counter_tag (value){
    cookie_counter_tag.innerText = total_cookie + " cookies"


}
function incrementCookies (cookies_to_add){

    total_cookie += cookies_to_add
    changer_cookie_counter_tag(total_cookie)
    localStorage.setItem("saved_cookies", total_cookie)
    console.log("Total de cookies : ", total_cookie)
    
}

//! Main
initializeGame()
changer_cookie_counter_tag(total_cookie)
cookie_image.addEventListener('click', ()=>{ incrementCookies(1) })