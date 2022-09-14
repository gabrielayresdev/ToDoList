const addTarefaBtn = document.querySelector(".tarefas-addButton")
const addTarefaBtn2 = document.querySelector(".fa-plus")

console.log(addTarefaBtn)

addTarefaBtn.addEventListener("click", () => {
    ativaForm()
})
addTarefaBtn2.addEventListener("click", () => {
    ativaForm()
})


function ativaForm() {
    const form = document.querySelector(".container")
    form.classList.remove("invisivel")
    addTarefaBtn.classList.add("invisivel")
}