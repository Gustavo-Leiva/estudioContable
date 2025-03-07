document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const topBar = document.querySelector(".top-bar");
    const navBar = document.querySelector(".nav-bar");

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop + 10) { // Evita cambios bruscos con +10px de tolerancia
            topBar.classList.add("hidden");
            navBar.classList.add("fixed");
        } else if (scrollTop < lastScrollTop - 10 || scrollTop === 0) { // Muestra al volver arriba
            topBar.classList.remove("hidden");
            navBar.classList.remove("fixed");
        }

        lastScrollTop = scrollTop;
    });
});


