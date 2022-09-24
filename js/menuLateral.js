const menuBtn = document.querySelector(".fa-bars")
const menu = document.querySelector(".menu")
const content = document.querySelector(".content")

menuBtn.addEventListener("click", function () {
    menu.classList.toggle("out-left")
    content.classList.toggle("center-display")
})

const grupos = document.querySelectorAll(".grupo")
const categorias = document.querySelectorAll(".categoria")

grupos.forEach(grupo => {
    grupo.addEventListener("click", () => {
        removeAtivo()
        mudaCategoria(grupo.textContent)
        grupo.classList.add("grupo-ativo")
    })
})

categorias.forEach(categoria => {
    categoria.addEventListener("click", () => {
        removeAtivo()
        console.log(categoria.textContent)
        mudaCategoria(categoria.textContent)
        categoria.classList.add("grupo-ativo")
    })
})

function removeAtivo() {
    grupos.forEach(grupo => {
        grupo.classList.remove("grupo-ativo")
    })
    categorias.forEach(categoria => {
        categoria.classList.remove("grupo-ativo")
    })
}