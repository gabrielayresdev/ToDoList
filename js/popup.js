const secaoOptionsBtn = document.querySelectorAll(".fa-ellipsis")
const entradaOptions = document.querySelectorAll(".entrada__options")

secaoOptionsBtn.forEach((secaoOptions, index) => {
    secaoOptions.addEventListener("click", function () {
        entradaOptions[index].classList.toggle("invisivel")
    })
})