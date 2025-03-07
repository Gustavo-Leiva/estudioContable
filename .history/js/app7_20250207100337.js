document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const topBar = document.querySelector(".top-bar");

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll hacia abajo, oculta la barra superior
            topBar.classList.add("hidden");
        } else if (scrollTop === 0) {
            // Si vuelve arriba, muestra la barra superior
            topBar.classList.remove("hidden");
        }

        lastScrollTop = scrollTop;
    });
});
