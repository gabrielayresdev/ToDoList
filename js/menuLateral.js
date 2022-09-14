const menuBtn = document.querySelector(".fa-bars")
const menu = document.querySelector(".menu")
const content = document.querySelector(".on-display")

menuBtn.addEventListener("click", function () {
    menu.classList.toggle("out-left")
    content.classList.toggle("center-display")
}) 