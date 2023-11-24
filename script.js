console.log("Olá mundo");

const themes = {
    't-dark': 't-light',
    't-light': 't-dark',
}

function test() {
    console.log(test);
    addEventListener('click', event => {
        event.preventDefault()
        const currentTheme = document.body.dataset.theme
        document.body.setAttribute('data-theme', themes[currentTheme] || 't-light')
    })
}