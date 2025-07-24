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



document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".beneficios-track");
  const slides = document.querySelectorAll(".beneficios-slide");
  const prevButton = document.querySelector(".beneficios-nav.prev");
  const nextButton = document.querySelector(".beneficios-nav.next");

  const totalSlides = slides.length;
  let visibleSlides = window.innerWidth < 768 ? 1 : 3;
  let currentIndex = 0;
  let autoplayInterval;

  const goToSlide = (index) => {
    if (index < 0) index = 0;
    if (index > totalSlides - visibleSlides) index = 0;

    currentIndex = index;
    const step = 100 / visibleSlides;
    track.style.transform = `translateX(-${currentIndex * step}%)`;
  };

  const nextSlide = () => {
    if (currentIndex < totalSlides - visibleSlides) {
      goToSlide(currentIndex + 1);
    } else {
      goToSlide(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    } else {
      goToSlide(totalSlides - visibleSlides);
    }
  };

  const startAutoplay = () => {
    autoplayInterval = setInterval(nextSlide, 4000);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayInterval);
  };

  nextButton.addEventListener("click", () => {
    stopAutoplay();
    nextSlide();
    startAutoplay();
  });

  prevButton.addEventListener("click", () => {
    stopAutoplay();
    prevSlide();
    startAutoplay();
  });

  goToSlide(0);
  startAutoplay();

  window.addEventListener("resize", () => {
    visibleSlides = window.innerWidth < 768 ? 1 : 3;
    goToSlide(currentIndex);
  });
});



// document.addEventListener('DOMContentLoaded', function () {
//     var swiper = new Swiper('.swiper-container', {
//         loop: true, // Carrusel infinito
//         autoplay: {
//             delay: 2500, // Retraso entre cada slide
//         },
//         slidesPerView: 1, // Número de slides por vista
//         spaceBetween: 2, // Espacio entre los slides
//         centeredSlides: false,  // Evita que queden centrados
//         loop: false,
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         breakpoints: {

          
//             1024: {
//                 slidesPerView: 3, // Tres slides visibles en pantallas grandes
//                 spaceBetween: 30,
//             },

         
//             768: {
//                 slidesPerView: 2, // Dos slides visibles en pantallas medianas
//                 spaceBetween: 20,
//             },
//               576: {
//                 slidesPerView: 1, // Un slide visible en pantallas pequeñas
//                 spaceBetween: 30,
//             },

//             480: {
//                 slidesPerView: 1, // Un slide visible en pantallas pequeñas
//                 spaceBetween: 5,
//             },
          
//              320: {
//                 slidesPerView: 1,
//                 spaceBetween: 2,
//             }
//         },
//     });
// });
