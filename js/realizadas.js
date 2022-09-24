const allDone = document.querySelectorAll("#marcarSecao")

allDone.forEach((allDoneBtn, index) => {
    allDoneBtn.addEventListener("click", function () {
        console.log("oi")
        const checks = document.querySelectorAll(".check")
        checks.forEach(function (check) {
            if (!check.checked) {
                check.checked = true
            }
        })
        const entradaOptions = document.querySelectorAll(".entrada__options")
        entradaOptions[index].classList.add("invisivel")
    })
})