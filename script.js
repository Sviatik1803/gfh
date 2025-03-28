
let input = document.querySelector(".form-control")
let btn = document.querySelector(".btn-search")
let form = document.getElementById("searchForm");
let cards = document.querySelectorAll(".card")
let btn_bye = document.querySelectorAll(".btn-bye")

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  let input_variable = input.value.trim().toLowerCase();
  cards.forEach(element => {
    if(input_variable != ""){
      if(element.querySelector('.card-title').textContent.toLowerCase().search(input_variable) == -1){
        element.style.display = "none"
      } else {
        element.style.display = "block"
      }
    } else {
      element.style.display = "block"
    }
  });
});

//Почитати потім як тут красиво зробити
// let array = [];
btn_bye.forEach(btn => {
  btn.addEventListener("click", (event) =>{

    event.preventDefault();
    const domObj = btn.closest('.card')
    let card = {
      img: domObj.querySelector('img').src,
      title: domObj.querySelector('.card-title').innerHTML,
      text: domObj.querySelector('.card-sub').innerHTML,
      price: domObj.querySelector('.price').innerHTML,
    } 
    
    
    
    
    localStorage.setItem("card",JSON.stringify(card))
  



  })
})

// localStorage.setItem("array","test")




// btn_bye.addEventListener('click', (elem) => {
//   forEach(elem =>{
    
//   })
// })
// Почитати як працюють функції, лямбди і тд





function goToCart() {
  window.location.href = 'cart.html';
}