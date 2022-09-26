const lista = JSON.parse(localStorage.getItem("tarefas")) || []

const confirmaBtn = document.querySelector(".confirmar")

const form = document.querySelector(".tarefa-form")
const tarefasList = document.querySelector(".tarefas")

/* Comportamento do botão que abre o form */
addTarefaBtn.addEventListener("click", () => {
    ativaForm()
})
addTarefaBtnHeader.addEventListener("click", () => {
    ativaForm()
})

/* Funcionalidade do botão de cancelar */
cancelaBtn.addEventListener("click", () => {
    limpaForm()

    fechaForm()
})

/* Adição de tarefas */
confirmaBtn.addEventListener("click", function () {
    const nome = form.querySelector(`input[type=text]`).value
    const descricao = form.querySelector("textarea").value
    const data = form.querySelector("input[type=date]").value
    const categoria = form.querySelector(".opcao-selecionada").childNodes[1].textContent
    const iconeCategoria = document.querySelector(`[data-icone="${categoria}"]`)
    const prioridade = form.querySelector(".flagBtn").childNodes[0].getAttribute('data-value')

    const tarefa = {
        "id": lista.length > 0 ? lista[lista.length - 1].id + 1 : 0,
        "nome": nome,
        "descricao": descricao,
        "data": formataData(data),
        "categoria": categoria,
        "prioridade": prioridade,
        "done": false
    }

    if (!formIncompleto(tarefa)) {
        criaTarefa(tarefa, iconeCategoria)
        lista.push(tarefa)
        localStorage.setItem("tarefas", JSON.stringify(lista))
        fechaForm()
    }

})

function criaTarefa(tarefa, icone) {
    /*                  
                    <li class="tarefa">
                        <input type="checkbox" class="check" />
                        <h4>Conferência às 15:00 de amanhã</h4>
                        <span>
                            <i class="fa-solid fa-inbox"></i>Entrada
                        </span>
                        <p>Zoom</p>
                        <p>22/09/2022</p>
                        <i class="fa-solid fa-trash delete"></i>
                    </li>
    */

    const li = document.createElement("li")
    li.classList.add("tarefa")
    li.dataset.id = tarefa.id

    /* Linha 1,2,3, coluna 1 */

    const radio = document.createElement("input")
    radio.setAttribute("type", "checkbox");
    radio.classList.add("check")

    /* Linha 1, Colunar 2 */

    const h4 = document.createElement("h4")
    h4.innerHTML = tarefa.nome

    const lixeira = document.createElement("i")
    lixeira.classList.add("fa-solid", "fa-trash", "delete")

    /* Funcionalidade de apagar a tarefa */
    lixeira.addEventListener("click", function (event) {
        apagaTarefa(event.target.parentNode, tarefa.id)
    })

    /* Linha 2, coluna 2 */

    const descricaoP = document.createElement("p")
    descricaoP.innerHTML = tarefa.descricao

    /* Linha 3, colunar 2 */

    const dataP = document.createElement("p")
    dataP.innerHTML = tarefa.data

    const span = document.createElement("span")
    span.appendChild(icone.cloneNode())
    span.innerHTML += tarefa.categoria

    li.appendChild(radio)
    li.appendChild(h4)
    li.appendChild(span)
    li.appendChild(descricaoP)
    li.appendChild(dataP)
    li.appendChild(lixeira)

    if (tarefa.done === false) {
        categorizaTarefa(tarefa, li.cloneNode(true))
        tarefasList.appendChild(li)
    } else if (tarefa.done === true) {
        criaTarefaConcluida(li)
    }

    limpaForm()

    atribuiFuncaoDeConcluir()
    /* 
        <li class="tarefa">
            <input type="radio" class="check">
            <h4>Conferência às 15:00 de amanhã</h4>
            <p>Zoom</p>
            <p>22/09/2022</p>
        </li>
    */
}

function criaTarefaConcluida(tarefa) {
    const tarefasConcluidas = document.querySelector(".Concluidas")

    tarefasConcluidas.appendChild(tarefa)
}

lista.forEach(function (tarefa) {
    criaTarefa(tarefa, document.querySelector(`[data-icone="${tarefa.categoria}"]`))

})

