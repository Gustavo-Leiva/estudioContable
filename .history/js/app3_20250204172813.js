document.addEventListener("DOMContentLoaded", function () {
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

    let testimonios = document.querySelectorAll('.testimonio-card');

    testimonios.forEach((testimonio, index) => {
        const foto = testimonio.querySelector('img');
        const fotoIniciales = testimonio.querySelector('.foto-iniciales');
        const nombre = testimonio.querySelector('h3').innerText;
        
        if (!foto) { // Si no hay foto, mostramos las iniciales
            const iniciales = nombre.split(' ').map(n => n[0].toUpperCase()).join('');
            fotoIniciales.innerText = iniciales;
            fotoIniciales.style.display = 'flex'; // Mostramos el círculo con las iniciales

            // Asignar un color único
            const colores = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6']; // Puedes agregar más colores
            const colorIndex = index % colores.length;
            fotoIniciales.style.backgroundColor = colores[colorIndex];
        }
    });
});
