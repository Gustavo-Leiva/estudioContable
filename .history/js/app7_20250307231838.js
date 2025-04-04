// Cuando el DOM se haya cargado completamente, se ejecuta la función.
document.addEventListener("DOMContentLoaded", function () {
    // Variable para almacenar la última posición del scroll
    let lastScrollTop = 0;

    // Selección de los elementos DOM que se van a manipular.
    const topBar = document.querySelector(".top-bar");
    const navBar = document.querySelector(".nav-bar");

    // Escucha el evento de desplazamiento (scroll) en la ventana.
    window.addEventListener("scroll", function () {
        // Obtiene la posición actual del scroll
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        // Compara la posición del scroll con la última posición para decidir qué hacer
        if (scrollTop > lastScrollTop + 10) { // Si se ha desplazado hacia abajo más de 10 píxeles
            // Agrega una clase 'hidden' a la barra superior y una clase 'fixed' a la barra de navegación
            topBar.classList.add("hidden");  // Oculta la barra superior
            navBar.classList.add("fixed");   // Fija la barra de navegación en la parte superior
        } else if (scrollTop < lastScrollTop - 10 || scrollTop === 0) { // Si se desplaza hacia arriba o está en la parte superior
            // Elimina la clase 'hidden' de la barra superior y la clase 'fixed' de la barra de navegación
            topBar.classList.remove("hidden");  // Muestra la barra superior
            navBar.classList.remove("fixed");   // Elimina la fijación de la barra de navegación
        }

        // Actualiza la última posición del scroll
        lastScrollTop = scrollTop;
    });
});



// document.addEventListener("DOMContentLoaded", function () {
//     let lastScrollTop = 0;
//     const topBar = document.querySelector(".top-bar");
//     const navBar = document.querySelector(".nav-bar");

//     window.addEventListener("scroll", function () {
//         let scrollTop = window.scrollY || document.documentElement.scrollTop;

//         if (scrollTop > lastScrollTop + 10) { // Evita cambios bruscos con +10px de tolerancia
//             topBar.classList.add("hidden");
//             navBar.classList.add("fixed");
//         } else if (scrollTop < lastScrollTop - 10 || scrollTop === 0) { // Muestra al volver arriba
//             topBar.classList.remove("hidden");
//             navBar.classList.remove("fixed");
//         }

//         lastScrollTop = scrollTop;
//     });
// });


