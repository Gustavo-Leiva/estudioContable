/* ================================================================
🎯 app.js) Menú de Navegación (Interacción de Mostrar/Ocultar)
===================================================================
💼 **Propósito:**
- Implementar un menú de navegación que se muestra u oculta mediante botones interactivos.
- Utiliza clases CSS para manipular la visibilidad del menú y proporciona una experiencia de usuario fluida al mostrar u ocultar el menú de navegación.

⚙️ **Comportamiento:**
- El menú se muestra cuando se hace clic en el botón "abrir" y se oculta al hacer clic en el botón "cerrar" o en cualquier enlace dentro del menú.

🖋️ **Detalles Técnicos:**
==================================================== */

/* ================================================
1) Menú de Navegación (Mostrar/Ocultar)
==================================================== */


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

