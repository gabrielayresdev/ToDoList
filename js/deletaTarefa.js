function apagaTarefa(elemento, id) {
    elemento.remove()
    const newLista = lista.filter(function (value, index) {
        return value.id != id
    })
    localStorage.setItem("tarefas", JSON.stringify(newLista))
    existemTarefas()
}

const deletaEntrada = document.querySelector("#deletaEntrada")

deletaEntrada.addEventListener("click", function () {
    const tarefas = document.querySelectorAll(".tarefa")

    tarefas.forEach(function (tarefa) {
        const nome = tarefa.querySelector("h4").textContent
        const data = tarefa.querySelectorAll("p")[1].textContent
        const existe = lista.find(elemento => elemento.nome === nome && elemento.data === data)
        console.log("apaguei 1")
        apagaTarefa(tarefa, existe.id)

    })
})