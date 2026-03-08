// simple floating animation

const card = document.querySelector(".card")

let pos = 0

setInterval(()=>{
pos += 0.2
card.style.transform = "translateY(" + Math.sin(pos)*5 + "px)"
},20)
