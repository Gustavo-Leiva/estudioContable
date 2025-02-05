document.addEventListener('DOMContentLoaded', function () {
    // Inicializando Swiper
    var swiper = new Swiper('.swiper-container', {
        loop: true, // Permite que el carrusel se repita de forma infinita
        autoplay: {
            delay: 2500, // Retraso de 2.5 segundos entre cada slide
        },
        slidesPerView: 1, // Mostrar un slide a la vez
        spaceBetween: 20, // Espacio entre los slides
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // En pantallas grandes, mostramos 3 slides a la vez
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            // En pantallas medianas, mostramos 2 slides a la vez
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // En móviles, mostramos 1 slide a la vez
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
        },
    });
});
