const bannerSemTarefas = document.querySelector(".sem-tarefas")

function existemTarefas() {
    const tarefas = document.querySelectorAll(".tarefa")
    if (tarefas.length > 0) {
        bannerSemTarefas.classList.add("invisivel")
    } else {
        bannerSemTarefas.classList.remove("invisivel")
    }
}