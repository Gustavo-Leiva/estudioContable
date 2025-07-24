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
  const prevBtn = document.querySelector(".beneficios-nav.prev");
  const nextBtn = document.querySelector(".beneficios-nav.next");
  const slide = document.querySelector(".beneficios-slide");

  if (!track || !slide || !prevBtn || !nextBtn) return;

  const slideWidth = slide.offsetWidth + 20; // ancho + gap
  let currentPosition = 0;
  let autoplayInterval;

  function scrollToPosition(pos) {
    track.scrollTo({
      left: pos,
      behavior: "smooth",
    });
  }

  function nextSlide() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    currentPosition += slideWidth;
    if (currentPosition > maxScroll) currentPosition = 0; // vuelve al principio
    scrollToPosition(currentPosition);
  }

  function prevSlide() {
    currentPosition -= slideWidth;
    if (currentPosition < 0) currentPosition = 0;
    scrollToPosition(currentPosition);
  }

  // Autoplay cada 4 segundos
  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 4000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  nextBtn.addEventListener("click", () => {
    stopAutoplay();
    nextSlide();
  });

  prevBtn.addEventListener("click", () => {
    stopAutoplay();
    prevSlide();
  });

  window.addEventListener("resize", () => {
    currentPosition = track.scrollLeft;
  });

  startAutoplay();
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
