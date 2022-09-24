const html = document.querySelector("html")
const checkbox = document.querySelector("#darkmode-switch")

function getColor(element, style) {
    return window.getComputedStyle(element).getPropertyValue(style)
}

function transformKey(key) {
    return "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()
}

function changeColors(colors) {
    Object.keys(colors).map(function (key) {
        html.style.setProperty(transformKey(key), colors[key])
    })
}

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(darkMode) : changeColors(lightMode)
})

const lightMode = {
    backgroundHeader: getColor(html, "--background-header"),
    backgroundMenu: getColor(html, "--background-menu"),
    backgroundDisplay: getColor(html, "--background-display"),
    backgroundSelected: getColor(html, "--background-hover-cinza"),
    backgroundHover: getColor(html, "--background-hover"),

    textFirst: getColor(html, "--text-first"),
    textSecond: getColor(html, "--text-second"),

    borderFirst: getColor(html, "--border-first"),
    borderSecond: getColor(html, "--border-second"),

    adicionarBotao: getColor(html, "--adicionar-botao"),
    adicionarHover: getColor(html, "--adicionar-hover"),
    cancelarBotao: getColor(html, "--cancelar-botao"),
    cancelarHover: getColor(html, "--cancelar-hover")
}

const darkMode = {
    backgroundHeader: "#313131",
    backgroundMenu: "#414141",
    backgroundDisplay: "#525252",
    backgroundSelected: "#525252",
    backgroundHover: "#FFFFFF33",

    textFirst: "#FFFFFF",
    textSecond: "#EEEEEE",

    borderFirst: "#1F1F1F",
    borderSecond: "#2E2E2E",

    adicionarBotao: "#CA3E47",
    adicionarHover: "#DC4F59",
    cancelarBotao: "#3D3D3D",
    cancelarHover: "#2D2D2D"
}