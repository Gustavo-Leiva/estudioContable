document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const topBar = document.querySelector(".top-bar");
    const navBar = document.querySelector(".nav-bar");

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll hacia abajo: oculta la sección de contacto y redes sociales
            topBar.classList.add("hidden");
            navBar.classList.add("fixed");
        } else {
            // Scroll hacia arriba: muestra la sección de contacto y redes sociales
            topBar.classList.remove("hidden");
            navBar.classList.remove("fixed");
        }

        lastScrollTop = scrollTop;
    });
});

