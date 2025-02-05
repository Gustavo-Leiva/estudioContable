document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true, // Carrusel infinito
        autoplay: {
            delay: 2500, // Retraso entre cada slide
        },
        slidesPerView: 1, // Número de slides por vista
        spaceBetween: 20, // Espacio entre los slides
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 3, // Tres slides visibles en pantallas grandes
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2, // Dos slides visibles en pantallas medianas
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 1, // Un slide visible en pantallas pequeñas
                spaceBetween: 10,
            },
        },
    });
});
