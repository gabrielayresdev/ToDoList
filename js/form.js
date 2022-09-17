const addTarefaBtn = document.querySelector(".tarefasAdd")
const addTarefaBtnHeader = document.querySelector(".fa-plus")

const cancelaBtn = document.querySelector(".cancelar")


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