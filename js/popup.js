const entradaOptionsBtn = document.querySelector(".fa-ellipsis")

entradaOptionsBtn.addEventListener("click", function () {
    const entradaOptions = document.querySelector(".entrada__options")
    entradaOptions.classList.toggle("invisivel")
})