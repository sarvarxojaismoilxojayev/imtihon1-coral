let inp = document.querySelector(".input")
let product = document.querySelector(".products")
let ctalog = document.querySelector(".catalog")

inp.addEventListener("click", (e) => {
  product.style.opacity = "0"
})

inp.addEventListener("blur", (e) => {
  product.style.opacity = "1"
})