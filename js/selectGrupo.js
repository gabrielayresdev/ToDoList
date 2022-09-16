const optionsBox = document.querySelector(".options")
const options = document.querySelectorAll(".option")
const opcaoSelecionada = document.querySelector(".opcao-selecionada")

opcaoSelecionada.addEventListener("click", function () {
    optionsBox.classList.toggle("invisivel")
})

options.forEach(function (option) {
    option.addEventListener("click", function () {
        const icone = this.querySelector("i")
        const nome = this.textContent

        opcaoSelecionada.innerHTML = ""
        opcaoSelecionada.appendChild(icone.cloneNode())
        opcaoSelecionada.innerHTML += nome

        /* !ALERTA DE GAMBIARRA */
        /* VOCÊ FOI AVISADO */
        /*         this.innerHTML = ""
                this.appendChild(icone)
                this.innerHTML += nome */

        optionsBox.classList.add("invisivel")
    })
})



