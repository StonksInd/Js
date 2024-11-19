//! definition des varibles globales

let total_cookie = 0
let cookie_per_s = 0

let shop = []

//! elt du dom

const cookie_image = document.getElementById("cookies_img")
const cookie_counter_tag = document.getElementById("cookie_counter")
const cookie_per_s_tag = document.getElementById("cookie_per_s")
const shop_tag = document.getElementById("shop-container")
const reset_button = document.getElementById('reset-button')

//! Function


function calcul_cps(){
    let total = 0 
    shop?.forEach(element => {
        element.total
        element.cps
        total += element.total * element.cps


    });
    return total
}

function handleShopClick (item) {
    if(item.price > total_cookie){
        alert('vous etes pauvres')
        return
    }
    let index = shop.findIndex(o => o.id == item.id)
    shop[index].total += 1
    total_cookie -= item.price
    shop[index].price = Math.round(shop[index].price * 1.2)

    
    localStorage.setItem('saved_shop', JSON.stringify(shop))
    refreshShop()
    calcul_cps()        
}

function refreshShop (){

    shop_tag.innerHTML = null

    shop?.forEach((item)=>{
        let newDomElement = document.createElement("div")
        newDomElement.classList = ["bg-white rounded p-3 flex justify-between cursor-pointer hover:bg-blue-200 transition-all duration-300"]

        let leftPart = document.createElement("div")
        leftPart.classList =["flex item-center gap-3"]

        let itemImage = document.createElement("img")
        itemImage.src = item.image_url
        itemImage.classList = ["rounded-full h-10 w-10"]

        let itemName = document.createElement("span")
        itemName.innerText = item.title

        let itemTotal = document.createElement("span")
        itemTotal.innerText = "nbr item " + item.total


        let itemCps = document.createElement("span")
        itemCps.innerText = item.cps + " rps"

        let itemPrice = document.createElement("span")
        itemPrice.innerText = item.price + " ring"

        newDomElement.appendChild(leftPart)
        newDomElement.appendChild(itemTotal)
        newDomElement.appendChild(itemCps)
        newDomElement.appendChild(itemPrice)
        leftPart.appendChild(itemImage)
        leftPart.appendChild(itemName)

        shop_tag.appendChild(newDomElement)

        //! add event listener
        newDomElement.addEventListener("click", () => {handleShopClick(item)})

    })

}


function initializeGame (){
    const saved_cookies = localStorage.getItem("saved_cookies")
    const saved_shop = localStorage.getItem("saved_shop")

    if(!saved_shop){
        shop = [
            {id: "old_sonic", title: "old sonic", price: 10, cps: 1, image_url: "assset/old_sonic.png", total: 0},
            {id: "young_sonic", title: "Young Sonic", price: 20, cps: 3, image_url: "https://static.wikia.nocookie.net/scratchpad/images/e/e6/Young_Sonic.jpg/revision/latest?cb=20130127220455", total: 0},
            {id: "Sonic", title: "Sonic", price: 50, cps: 5, image_url: "assset/sonic_boom.png", total: 0},
            {id: "Pixel_sonic", title: "Pixel Sonic", price: 100, cps: 15, image_url: "https://easydrawingguides.com/wp-content/uploads/2021/11/how-to-draw-sonic-the-hedgehog-pixel-art-featured-image-1200.png", total: 0},
            {id: "Anneau_unique", title: "Anneau Unique", price: 250, cps: 50, image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/One_Ring_Blender_Render.png/330px-One_Ring_Blender_Render.png", total: 0},
            {id: "Super_sonic_2", title: "Super sonic 2", price: 1000, cps: 250, image_url: "https://static.wikia.nocookie.net/sonic/images/2/28/Starfall_supersonic-profile.jpg/revision/latest?cb=20240126143954", total: 0},
            {id: "Ring", title: "ring", price: 5000, cps: 1200, image_url: "https://www.inoki-piercing.fr/modeles/22/FOAX218/FOAX218-cockring-silicone-noir-donut-18mm.jpg", total: 0},
            {id: "chaos_emeralds", title: "chaos emeralds", price: 20000, cps: 6000, image_url: "https://static.wikia.nocookie.net/sonicthehedgehogfanon/images/e/e9/Chaos_Emeralds.png/revision/latest?cb=20130712042202", total: 0}

            
        ]
    }else{
        shop = JSON.parse(saved_shop)
    }
    if(!saved_cookies){
        localStorage.setItem("saved_cookies", 0)
        total_cookie = 0
    }
    else{
        total_cookie = parseInt(saved_cookies)
    }
    refreshShop()
    
   setInterval(()=>incrementCookies(calcul_cps()), 1000)
   
}

function resetGame(){

    localStorage.removeItem('saved_cookies')
    localStorage.removeItem('saved_shop')
    

    total_cookie = 0
    


}

function changer_cookie_counter_tag (value){
    cookie_counter_tag.innerText = total_cookie + " ring"


}
function changer_cps_counter_tag(value){
    cookie_per_s_tag.innerText = (calcul_cps()) + " ring par seconde"
}
function incrementCookies (cookies_to_add){

    total_cookie += cookies_to_add 
    
    changer_cookie_counter_tag(total_cookie)
    changer_cps_counter_tag()
    localStorage.setItem("saved_cookies", total_cookie)
    console.log("Total de cookies : ", total_cookie)

    
}

//! Main
initializeGame()
changer_cookie_counter_tag(total_cookie)

cookie_image.addEventListener('click', ()=>{ incrementCookies(1) })
reset_button.addEventListener('click', resetGame)