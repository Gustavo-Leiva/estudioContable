document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".custom-carousel-track");
    const slides = document.querySelectorAll(".custom-slide");
    const prevButton = document.querySelector(".custom-nav prev");
    const nextButton = document.querySelector(".custom-nav.next");
    const pagination = document.querySelector(".custom-pagination");

    const totalSlides = slides.length;
    let visibleSlides = window.innerWidth < 768 ? 1 : 3;
    let currentIndex = 0;
    let autoplayInterval;

    const renderPagination = () => {
        pagination.innerHTML = ""; // Limpiar puntos anteriores
        for (let i = 0; i <= totalSlides - visibleSlides; i++) {
            const dot = document.createElement("span");
            dot.addEventListener("click", () => goToSlide(i));
            pagination.appendChild(dot);
        }
    };

    const updatePagination = () => {
        const dots = document.querySelectorAll(".custom-pagination span");
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    };

    const goToSlide = (index) => {
        if (index < 0) index = 0;
        if (index >= totalSlides) index = 0;

        currentIndex = index;
        const step = 100 / visibleSlides;
        track.style.transform = `translateX(-${currentIndex * step}%)`;
        updatePagination();
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
        autoplayInterval = setInterval(nextSlide, 3000);
    };

    const stopAutoplay = () => {
        clearInterval(autoplayInterval);
    };

    prevButton.addEventListener("click", () => {
        stopAutoplay();
        prevSlide();
        startAutoplay();
    });

    nextButton.addEventListener("click", () => {
        stopAutoplay();
        nextSlide();
        startAutoplay();
    });

    // Iniciales si no hay imagen
    const testimonios = document.querySelectorAll('.testimonio-card');
    testimonios.forEach((testimonio) => {
        const foto = testimonio.querySelector('img');
        const iniciales = testimonio.querySelector('.foto-iniciales');
        const nombre = testimonio.querySelector('h3')?.innerText || "";
        if (!foto || !foto.src || foto.src.endsWith('/') || foto.src.endsWith('.html')) {
            const inicial = nombre.split(' ').map(n => n[0]).join('').toUpperCase();
            iniciales.textContent = inicial;
            iniciales.style.display = 'flex';
            if (foto) foto.style.display = 'none';
        }
    });

    renderPagination();
    goToSlide(0);
    startAutoplay();

    // ✅ Ajuste dinámico al redimensionar ventana
    window.addEventListener('resize', () => {
        visibleSlides = window.innerWidth < 768 ? 1 : 3;
        renderPagination();
        goToSlide(currentIndex);
    });
});

