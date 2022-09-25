const secaoOptionsBtn = document.querySelectorAll(".fa-ellipsis")
const entradaOptions = document.querySelectorAll(".entrada__options")

secaoOptionsBtn.forEach((secaoOptions, index) => {
    secaoOptions.addEventListener("click", function () {
        entradaOptions[index].classList.toggle("invisivel")
    })

    /* Fecha o popup caso cliquem fora */
    window.addEventListener("click", function (event) {
        if (event.target != entradaOptions[index] && event.target != secaoOptions) {
            entradaOptions[index].classList.add("invisivel")
        }
    })
})