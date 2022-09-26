const allDone = document.querySelectorAll("#marcarSecao")

allDone.forEach((allDoneBtn, index) => {
    allDoneBtn.addEventListener("click", function () {
        const checks = document.querySelectorAll(".check")
        checks.forEach(function (check) {
            if (!check.checked) {
                check.checked = true

                const tarefa = check.parentNode

                concluiTarefa(tarefa.getAttribute("data-id"), true)
                criaTarefaConcluida(tarefa)

                /* Recursividade */
                atribuiFuncaoDeConcluir()
            }
        })
        const entradaOptions = document.querySelectorAll(".entrada__options")
        entradaOptions[index].classList.add("invisivel")
    })
})

function atribuiFuncaoDeConcluir() {
    document.querySelectorAll(".tarefa").forEach(tarefa => {
        const checkBtn = tarefa.querySelector('.check')
        if (tarefa.parentNode.parentNode.getAttribute("data-content") === "Concluidas") {
            checkBtn.checked = true

            checkBtn.addEventListener("change", event => {
                if (!event.target.checked) {
                    concluiTarefa(tarefa.getAttribute("data-id"), false)
                    window.location.reload()
                }
            })
        } else {
            checkBtn.addEventListener("change", (event) => {
                if (event.target.checked) {
                    concluiTarefa(tarefa.getAttribute("data-id"), true)
                    criaTarefaConcluida(tarefa)

                    /* Recursividade */
                    atribuiFuncaoDeConcluir()
                }
            })
        }
    })
}

function concluiTarefa(id, value) {
    const elementosADeletar = document.querySelectorAll(`[data-id="${id}"]`)
    elementosADeletar.forEach(element => {
        element.remove()
    })

    lista.forEach(tarefa => {
        if (tarefa.id == id) {
            tarefa.done = value
        }
    })
    localStorage.setItem("tarefas", JSON.stringify(lista))
}