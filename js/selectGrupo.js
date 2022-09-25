const optionsBox = document.querySelector(".options")
const options = document.querySelectorAll(".option")
const opcaoSelecionada = document.querySelector(".opcao-selecionada")

opcaoSelecionada.addEventListener("click", function () {
    optionsBox.classList.toggle("invisivel")
})

/* Fecha o popup caso cliquem fora */
window.addEventListener("click", function (event) {
    if (event.target != optionsBox && event.target != opcaoSelecionada) {
        optionsBox.classList.add("invisivel")
    }
})

options.forEach(function (option) {
    option.addEventListener("click", function () {
        const icone = this.querySelector("i")
        const nome = this.textContent

        opcaoSelecionada.innerHTML = ""
        opcaoSelecionada.appendChild(icone.cloneNode())
        opcaoSelecionada.innerHTML += nome

        optionsBox.classList.add("invisivel")
    })
})