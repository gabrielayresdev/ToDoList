/* 
    const tarefa = {
        "nome": "Trabalho",
        "descricao": "Trabalho de projetos de carreira",
        "data": formatData(13/09/2022),
        "categoria": "Hoje",
        "favorito:" false,
        "done": false
    }
*/

/* const tarefas = document.querySelectorAll(".tarefa") */
const bannerSemTarefas = document.querySelector(".sem-tarefas")

function existemTarefas() {
    if (lista.length > 0) {
        bannerSemTarefas.classList.add("invisivel")
    } else {
        bannerSemTarefas.classList.remove("invisivel")
    }
}