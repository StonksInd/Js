//! definition des varibles globales

let total_cookie = 0
let cookie_per_s = 0

let shop = [
    {id: "ring_bell", title: "ring_bell", price: 10, cps: 1, image_url: "assset/bell.png", total: 0},
    {id: "sonic_boom", title: "sonic_boom", price: 20, cps: 3, image_url: "assset/sonic_boom.png", total: 0},

]

//! elt du dom

const cookie_image = document.getElementById("cookies_img")
const cookie_counter_tag = document.getElementById("cookie_counter")
const shop_tag = document.getElementById("shop-container")

//! Function

function handleShopClick (item) {
    let index = shop.findIndex(o => o.id == item.id)
    shop[index].total += 1
    refreshShop()
}
function refreshShop (){

    shop_tag.innerHTML = null

    shop.forEach((item)=>{
        let newDomElement = document.createElement("div")
        newDomElement.classList = ["bg-white rounded p-3 flex justify-between cursor-pointer hover:bg-blue-200 transition-all duration-300"]

        let leftPart = document.createElement("div")
        leftPart.classList =["flex item-center gap-3"]

        let itemImage = document.createElement("img")
        itemImage.src = item.image_url
        itemImage.classList = ["rounded-full h-10"]

        let itemName = document.createElement("span")
        itemName.innerText = item.title

        let itemTotal = document.createElement("span")
        itemTotal.innerText = item.total

        newDomElement.appendChild(leftPart)
        newDomElement.appendChild(itemTotal)
        leftPart.appendChild(itemImage)
        leftPart.appendChild(itemName)

        shop_tag.appendChild(newDomElement)

        //! add event listener
        newDomElement.addEventListener("click", () => {handleShopClick(item)})

    })

}
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
    refreshShop()
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