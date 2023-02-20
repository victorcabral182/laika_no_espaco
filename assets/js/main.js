const buttonMenu = document.querySelector(".button-menu");
const containerMenu = document.querySelector(".container__menu-links")

buttonMenu.addEventListener("click", () => {
    containerMenu.classList.toggle("container__menu-links-ativo");
    if(containerMenu.classList.length > 1) {
        buttonMenu.innerHTML = "&#128473;"
        buttonMenu.style.marginBottom = "3px"
    } else {
        buttonMenu.innerHTML = "&#9776;"
        buttonMenu.style.marginBottom = "-3px"
    }
})
