const AllDone = document.querySelector("#marcarEntrada")

AllDone.addEventListener("click", function () {
    const checks = document.querySelectorAll(".check")
    checks.forEach(function (check) {
        if (!check.checked) {
            check.checked = true
        }
    })
    const entradaOptions = document.querySelector(".entrada__options")
    entradaOptions.classList.toggle("invisivel")
})