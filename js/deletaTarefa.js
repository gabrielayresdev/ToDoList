function apagaTarefa(elemento, id) {
    elemento.remove()
    const newLista = lista.filter(function (value, index) {
        return value.id != id
    })
    localStorage.setItem("tarefas", JSON.stringify(newLista))
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
