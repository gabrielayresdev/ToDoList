function apagaTarefa(elemento, tarefa) {
    elemento.parentNode.parentNode.remove()
    const newLista = lista.filter(function (value, index) {
        return value.id != tarefa.id
    })
    localStorage.setItem("tarefas", JSON.stringify(newLista))
    existemTarefas()
}