const flagBtn = document.querySelector(".flagBtn")
const flagsContainer = document.querySelector(".flags")
const flags = flagsContainer.querySelectorAll(".fa-flag")

flagBtn.addEventListener("click", function () {
    flagsContainer.classList.toggle("invisivel")
})

/* Fecha o popup caso cliquem fora */
window.addEventListener("click", function (event) {
    if (event.target != flagBtn && event.target != flagsContainer && event.target != flagBtn.childNodes[0]) {
        flagsContainer.classList.add("invisivel")
    }
})

flags.forEach(function (flag) {
    flag.addEventListener("click", function () {
        flagBtn.innerHTML = ""
        const newFlag = flag.cloneNode()
        flagBtn.appendChild(newFlag)

        flagsContainer.classList.add("invisivel")
    })
})