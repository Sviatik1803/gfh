let cart = document.querySelector(".card")
let price = document.querySelector(".container-price")
let button = document.querySelector(".button-container")

let data = JSON.parse(localStorage.getItem("card"))

console.log(data)

cart.querySelector(".card-img").src = data.img
cart.querySelector(".card-title").innerHTML = data.title
cart.querySelector(".card-sub").innerHTML = data.text
cart.querySelector(".price").innerHTML = data.price

// cards.forEach(element => {
//     console.log(element)
// });