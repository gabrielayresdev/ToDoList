function categorizaTarefa(tarefa, li) {
    const hoje = document.querySelector(".hoje")
    const emBreve = document.querySelector(".Em-breve")

    if (tarefa.data === getDate()) {
        hoje.appendChild(li.cloneNode(true))
    } else {
        emBreve.appendChild(li.cloneNode(true))
    }

    if (tarefa.categoria != "Entrada") {
        const categoria = document.querySelector(`[data-content="${tarefa.categoria}"]`)
        const tarefas = categoria.querySelector(`.${tarefa.categoria}`)
        tarefas.appendChild(li.cloneNode(true))
    }

}

function mudaCategoria(nome) {
    someCategorias()
    const categoria = document.querySelector(`[data-content="${nome}"]`)
    categoria.classList.remove("invisivel")
}

function someCategorias() {
    const categorias = document.querySelectorAll("[data-content]")
    categorias.forEach(categoria => {
        categoria.classList.add("invisivel")
    })
}

