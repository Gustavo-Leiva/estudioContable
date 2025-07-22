/* ================================================================
🎯 app4.js) Implementación de un Carrusel de Imágenes (Swiper)
===================================================================
💼 **Propósito:**
- Este script implementa un carrusel de imágenes utilizando la librería **Swiper**. El carrusel permite navegar entre slides (elementos de contenido como imágenes, productos, etc.) de forma automática y manual.
- Es ideal para crear presentaciones dinámicas o secciones interactivas que muestran contenido deslizable de forma atractiva y fluida.

⚙️ **Comportamiento:**
- El carrusel es **infinito**, lo que significa que cuando llega al final, vuelve al principio.
- La funcionalidad de **autoplay** permite que el carrusel se mueva automáticamente cada 2.5 segundos.
- Ofrece controles de navegación manual mediante botones de **siguiente** y **anterior**.
- El número de slides visibles y el espacio entre ellos se ajustan dinámicamente según el tamaño de la pantalla.

🖋️ **Detalles Técnicos:**
==================================================== */

/* ================================================
1) Inicialización del Carrusel con Swiper
==================================================== */

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
             320: {
                slidesPerView: 1,
                spaceBetween: 5,
            }
        },
    });
});
