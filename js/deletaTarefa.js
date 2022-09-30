function apagaTarefa(elemento, id) {
    const elementosADeletar = document.querySelectorAll(`[data-id="${id}"]`)
    elementosADeletar.forEach(element => {
        element.remove()
    })

    const aux = lista.find(item => item.nome === elemento.nome && item.data === elemento.data)
    const auxId = lista.indexOf(aux)

    lista.splice(auxId, 1)

    localStorage.setItem("tarefas", JSON.stringify(lista))
}

const deletaSecao = document.querySelectorAll("#deletaSecao")

deletaSecao.forEach(deleta => {
    deleta.addEventListener("click", function () {
        const tarefas = document.querySelectorAll(".tarefa")

        tarefas.forEach(function (tarefa) {
            tarefa.remove()
        })

        lista.splice(0, lista.length)
        localStorage.setItem("tarefas", JSON.stringify(lista))

        const entradaOptions = document.querySelector(".entrada__options")
        entradaOptions.classList.toggle("invisivel")
    })
})
