const flagBtn = document.querySelector(".flagBtn")
const flagsContainer = document.querySelector(".flags")
const flags = flagsContainer.querySelectorAll(".fa-flag")
/* const flagP3 = document.querySelector('[data-value="3"]')
const flagP2 = document.querySelector('[data-value="2"]')
const flagP1 = document.querySelector('[data-value="1"]')
const flagP0 = document.querySelector('[data-value="0"]') */

flagBtn.addEventListener("click", function () {
    flagsContainer.classList.toggle("invisivel")
})

flags.forEach(function (flag) {
    flag.addEventListener("click", function () {
        flagBtn.innerHTML = ""
        const newFlag = flag.cloneNode()
        flagBtn.appendChild(newFlag)

        flagsContainer.classList.add("invisivel")
    })
})