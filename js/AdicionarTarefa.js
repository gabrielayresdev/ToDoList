const lista = JSON.parse(localStorage.getItem("tarefas")) || []
existemTarefas()

const addTarefaBtn = document.querySelector(".tarefasAdd")
const addTarefaBtnHeader = document.querySelector(".fa-plus")

const cancelaBtn = document.querySelector(".cancelar")
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
    const iconeCategoria = form.querySelector(`[data-categoria="${categoria}"]`)
    const prioridade = form.querySelector(".flagBtn").childNodes[0].getAttribute('data-value')

    console.log(iconeCategoria)

    const tarefa = {
        "nome": nome,
        "descricao": descricao,
        "data": data,
        "categoria": categoria,
        "prioridade": prioridade,
        "done": false
    }

    if (formIncompleto(tarefa)) {
        console.log("incompleto")
    } else {
        criaTarefa(tarefa, iconeCategoria)
        lista.push(tarefa)
        localStorage.setItem("tarefas", JSON.stringify(lista))
        existemTarefas()
        fechaForm()
    }

})

function ativaForm() {
    const formContainer = document.querySelector(".container")
    formContainer.classList.remove("invisivel")
    addTarefaBtn.classList.add("invisivel")
}

function fechaForm() {
    const formContainer = document.querySelector(".container")
    formContainer.classList.add("invisivel")
    addTarefaBtn.classList.remove("invisivel")
}

function criaTarefa(tarefa, icone) {
    /*                  
                    <li class="tarefa">
                        <input type="checkbox" class="check" />
                        <h4>Conferência às 15:00 de amanhã</h4>
                        <p>Zoom</p>
                        <div class="tarefa__footer">
                            <p>22/09/2022</p>
                            <span>
                                <i class="fa-solid fa-inbox"></i>Entrada
                            </span>
                        </div>
                    </li>
    */


    const li = document.createElement("li")
    li.classList.add("tarefa")

    const radio = document.createElement("input")
    radio.setAttribute("type", "checkbox");
    radio.classList.add("check")

    const h4 = document.createElement("h4")
    h4.innerHTML = tarefa.nome

    const descricaoP = document.createElement("p")
    descricaoP.innerHTML = tarefa.descricao

    const tarefa__footer = document.createElement("div")
    tarefa__footer.classList.add("tarefa__footer")

    const dataP = document.createElement("p")
    dataP.innerHTML = formataData(tarefa.data)

    const span = document.createElement("span")
    span.appendChild(icone.cloneNode())
    span.innerHTML += tarefa.categoria

    tarefa__footer.appendChild(dataP)
    tarefa__footer.appendChild(span)

    li.appendChild(radio)
    li.appendChild(h4)
    li.appendChild(descricaoP)
    li.appendChild(tarefa__footer)


    /* !ALERTA DE GAMBIARRA */
    /* VOCÊ FOI AVISADO */
    /* opcaoSelecionada.innerHTML = ""
    opcaoSelecionada.appendChild(icone)
    opcaoSelecionada.innerHTML += "Entrada" */

    tarefasList.appendChild(li)
    limpaForm()
    /* 
        <li class="tarefa">
            <input type="radio" class="check">
            <h4>Conferência às 15:00 de amanhã</h4>
            <p>Zoom</p>
            <p>22/09/2022</p>
        </li>
    */
}

function limpaForm() {
    const entradas = form.querySelectorAll("input")
    const textArea = form.querySelector("textarea")

    entradas.forEach(function (entrada) {
        entrada.value = ""
    })
    textArea.value = ""
}

function formataData(data) {
    /* YYYY-MM-DD */
    const ano = data.slice(0, 4)
    const mes = data.slice(5, 7)
    const dia = data.slice(8, 10)

    const dataFormatada = `${dia}/${mes}/${ano}`
    return dataFormatada
}


lista.forEach(function (tarefa) {
    criaTarefa(tarefa, document.querySelector(`[data-categoria="${tarefa.categoria}"]`))

})