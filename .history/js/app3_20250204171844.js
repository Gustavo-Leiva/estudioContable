document.addEventListener("DOMContentLoaded", function () {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1, /* Muestra 1 testimonio en pantallas pequeñas */
        spaceBetween: 20,
        loop: true, /* Carrusel infinito */
        autoplay: {
            delay: 2000, /* Cambia cada 3 segundos */
            disableOnInteraction: false, /* Continúa el autoplay tras la interacción */
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: { /* Responsive */
            768: { slidesPerView: 2 }, /* 2 cards en tablet */
            1024: { slidesPerView: 3 } /* 3 cards en pantallas grandes */
        }
    });
});
