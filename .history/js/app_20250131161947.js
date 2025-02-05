// menu.js
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    const elementMenu = document.querySelectorAll(".nav-list a");

    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    });

    elementMenu.forEach(element => {
        element.addEventListener("click", () => {
            nav.classList.remove("visible");
        });
    });
});
