if (window.matchMedia("(max-width:480px)").matches) {
    const menu = document.querySelector(".menu")
    menu.classList.add("out-left")
    /* a viewport tem pelo menos que 480 pixels de largura */
    busca.addEventListener("focus", function () {
        const cabecalho__right = document.querySelector(".cabecalho__right")
        cabecalho__right.classList.add("invisivel")
    })

    busca.addEventListener("blur", function () {
        const cabecalho__right = document.querySelector(".cabecalho__right")
        cabecalho__right.classList.remove("invisivel")
    })
}

busca.addEventListener("focus", function () {
    const icone = document.querySelector(".fa-magnifying-glass")
    icone.classList.add("black")
})

busca.addEventListener("blur", function () {
    const icone = document.querySelector(".fa-magnifying-glass")
    icone.classList.remove("black")
})