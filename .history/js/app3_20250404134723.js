/* ================================================================
🎯 app3.js) Inicialización de Swiper y Manejo de Testimonios
===================================================================
💼 **Propósito:**
- Inicializa un carrusel de imágenes utilizando la biblioteca **Swiper** y configura su comportamiento.
- Maneja la visualización de las fotos de los testimonios, mostrando las iniciales del nombre del testimonio si no hay foto disponible, y asignando colores de fondo únicos a cada uno.

⚙️ **Comportamiento:**
- El **Swiper** ofrece una experiencia de carrusel de imágenes interactivo con controles de navegación y paginación.
- Los **testimonios** son procesados para mostrar las iniciales del nombre si no se encuentra una foto y aplicar un color único de fondo para cada testimonio.

🖋️ **Detalles Técnicos:**
==================================================== */

/* ================================================
 Inicialización del Carrusel de Imágenes (Swiper)
==================================================== */

document.addEventListener("DOMContentLoaded", function () {
    try {
        let swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                600: { slidesPerView: 2, spaceBetween: 5 },
                900: { slidesPerView: 3, spaceBetween: 5 },
                1200: { slidesPerView: 3, spaceBetween: 5 } // Mantiene 3 testimonios en pantallas grandes
            }
            
        });
    } catch (error) {
        console.error('Error inicializando Swiper:', error);
    }

    let testimonios = document.querySelectorAll('.testimonio-card');

    testimonios.forEach((testimonio, index) => {
        const foto = testimonio.querySelector('img');
        const fotoIniciales = testimonio.querySelector('.foto-iniciales');
        const nombre = testimonio.querySelector('h3').innerText;

        if (!foto || !foto.src) { // Si no hay foto, mostramos las iniciales
            const iniciales = nombre.split(' ').map(n => n[0].toUpperCase()).join('');
            fotoIniciales.innerText = iniciales;
            fotoIniciales.style.display = 'flex'; // Mostramos el círculo con las iniciales

            // Asignar un color único
            const colores = ['#829DB5']; 
            // const colores = ['#829DB5', '#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6']; // Puedes agregar más colores
            const colorIndex = index % colores.length;
            fotoIniciales.style.backgroundColor = colores[colorIndex];

            // Opcional: Asignar una imagen predeterminada
            if (foto) {
                foto.src = 'ruta/a/imagen_predeterminada.jpg'; // Imagen predeterminada
            }
        }
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     try {
//         let swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 20,
//             loop: true,
//             autoplay: {
//                 delay: 2000,
//                 disableOnInteraction: false,
//             },
//             navigation: {
//                 nextEl: ".swiper-button-next",
//                 prevEl: ".swiper-button-prev",
//             },
//             pagination: {
//                 el: ".swiper-pagination",
//                 clickable: true,
//             },
//             breakpoints: {
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 }
//             }
//         });
//     } catch (error) {
//         console.error('Error inicializando Swiper:', error);
//     }

//     let testimonios = document.querySelectorAll('.testimonio-card');

//     testimonios.forEach((testimonio, index) => {
//         const foto = testimonio.querySelector('img');
//         const fotoIniciales = testimonio.querySelector('.foto-iniciales');
//         const nombre = testimonio.querySelector('h3').innerText;

//         if (!foto || !foto.src || foto.src === "") { // Si no hay foto, mostramos las iniciales
//             const iniciales = nombre.split(' ').map(n => n[0].toUpperCase()).join('');
//             fotoIniciales.innerText = iniciales;
//             fotoIniciales.style.display = 'flex'; // Mostramos el círculo con las iniciales

//             // Asignar un color único
//             const colores = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6']; // Puedes agregar más colores
//             const colorIndex = index % colores.length;
//             fotoIniciales.style.backgroundColor = colores[colorIndex];

//             // Ocultamos la etiqueta <img> para evitar mostrar el texto "Foto de María Gómez"
//             if (foto) {
//                 foto.style.display = 'none'; // Ocultamos la imagen
//             }
//         } else {
//             // Si hay imagen, ocultar las iniciales
//             fotoIniciales.style.display = 'none';
//         }
//     });
// });
