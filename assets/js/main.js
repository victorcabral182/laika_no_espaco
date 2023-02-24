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

const listaNav = document.querySelectorAll(".menu-link");
function marcaPagina(index) {
    listaNav[index].classList.toggle("marca-link");
    console.log(listaNav[index])
}

let tituloPagina = document.title;
if(tituloPagina === 'LAIKA NO ESPAÇO | Home') {
    listaNav[0].classList.toggle("marca-link");
} else if (tituloPagina === 'LAIKA NO ESPAÇO | Videos') {
    listaNav[1].classList.toggle("marca-link");
} else if (tituloPagina === 'LAIKA NO ESPAÇO | Merch') {
    listaNav[2].classList.toggle("marca-link");
} else if (tituloPagina === 'LAIKA NO ESPAÇO | Tour') {
    listaNav[3].classList.toggle("marca-link");
}
