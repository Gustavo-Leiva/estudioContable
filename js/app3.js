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
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
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
            const colores = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6']; // Puedes agregar más colores
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
