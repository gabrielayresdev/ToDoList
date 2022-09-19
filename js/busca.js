const busca = document.querySelector(".input-busca")

busca.addEventListener("input", function () {
    const tarefas = document.querySelectorAll(".tarefa")
    const reg = new RegExp(busca.value, "i")

    if (busca.value.length > 0) {
        tarefas.forEach(function (tarefa) {
            const nome = tarefa.querySelector("h4").textContent
            if (!reg.test(nome)) {
                tarefa.classList.add("invisivel")
            } else {
                tarefa.classList.remove("invisivel")
            }
        })
    } else {
        tarefas.forEach(function (tarefa) {
            tarefa.classList.remove("invisivel")
        })
    }
    tarefas.forEach(function (tarefa) {



    })
})