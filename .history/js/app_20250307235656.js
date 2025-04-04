// menu.js OK VISTO

document.addEventListener("DOMContentLoaded", function () {
    // Selección de los elementos HTML relacionados con el menú
    const nav = document.querySelector("#nav"); // Contenedor del menú de navegación
    const abrir = document.querySelector("#abrir"); // Botón para abrir el menú
    const cerrar = document.querySelector("#cerrar"); // Botón para cerrar el menú
    const elementMenu = document.querySelectorAll(".nav-list a"); // Enlaces dentro del menú de navegación

    // Abrir el menú
    abrir.addEventListener("click", () => {
        nav.classList.add("visible"); // Añadir la clase 'visible' para mostrar el menú
    });

    // Cerrar el menú
    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible"); // Eliminar la clase 'visible' para ocultar el menú
    });

    // Cerrar el menú al hacer clic en un enlace de navegación
    elementMenu.forEach(element => {
        element.addEventListener("click", () => {
            nav.classList.remove("visible"); // Eliminar la clase 'visible' para ocultar el menú
        });
    });
});

